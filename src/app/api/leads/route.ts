import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { createLead } from '../../../lib/db';
import { sendNewLeadNotification } from '../../../lib/email';

// Zod validation schema for leads
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  country: z.string().min(2, 'Please specify your country'),
  treatment_interest: z.string().min(2, 'Please select your treatment interest'),
  message: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Extract fields from multipart form-data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const country = formData.get('country') as string;
    const treatment_interest = formData.get('treatment_interest') as string;
    const message = formData.get('message') as string || undefined;

    // Validate fields with Zod
    const validation = leadSchema.safeParse({
      name,
      email,
      phone,
      country,
      treatment_interest,
      message
    });

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validation.data;
    const file = formData.get('xray') as File | null;
    let fileUrl = '';

    // Handle file upload if present
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create local public/uploads directory if not exists
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      // Sanitize file name and write to directory
      const sanitizedFilename = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
      const filepath = path.join(uploadsDir, sanitizedFilename);
      fs.writeFileSync(filepath, buffer);
      
      fileUrl = `/uploads/${sanitizedFilename}`;
    }

    // Save lead to NestJS database
    let lead = null;
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
      const backendRes = await fetch(`${baseUrl}/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          country: data.country,
          treatment_interest: data.treatment_interest,
          message: data.message,
          x_ray_file_url: fileUrl ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${fileUrl}` : undefined
        })
      });
      if (backendRes.ok) {
        const backendData = await backendRes.json();
        lead = backendData.data;
      } else {
        console.warn('Failed to save lead to NestJS backend, falling back to local creation');
      }
    } catch (err) {
      console.error('Error contacting NestJS backend:', err);
    }

    if (!lead) {
      // Fallback
      lead = await createLead({
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        treatment_interest: data.treatment_interest,
        message: data.message,
        x_ray_file_url: fileUrl || undefined
      });
    }

    // Send emails (confirmation to patient + alert to concierge@dentalntk.com)
    await sendNewLeadNotification({
      name: data.name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      treatment: data.treatment_interest,
      message: data.message,
      fileUrl: fileUrl ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}${fileUrl}` : undefined
    });

    return NextResponse.json({
      success: true,
      message: 'Lead received and processed successfully',
      data: lead
    });

  } catch (error) {
    console.error('API Error /api/leads:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}
