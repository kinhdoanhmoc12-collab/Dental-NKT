import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createAppointment } from '../../../lib/db';
import { convertToVietnamTime, formatVietnamTime } from '../../../lib/timezone';
import { sendNewAppointmentNotification } from '../../../lib/email';

// Zod validation schema for appointment bookings
const appointmentSchema = z.object({
  patient_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  date_time: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date/time format'
  }),
  timezone: z.enum(['AEST', 'AEDT', 'ACST', 'ACDT', 'AWST', 'NZST', 'NZDT', 'UTC']).default('AEST'),
  service_id: z.string().min(2, 'Please select a valid treatment')
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body with Zod
    const validation = appointmentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validation.data;

    // Convert source timezone to Vietnam local time (ICT)
    const vietnamTime = convertToVietnamTime({
      originalTime: data.date_time,
      sourceTimezone: data.timezone
    });
    
    // Save to PostgreSQL/mock JSON file via DB helper
    const appointment = await createAppointment({
      patient_name: data.patient_name,
      email: data.email,
      phone: data.phone,
      date_time: vietnamTime,
      service_id: data.service_id
    });

    // Format local time string for the notification message
    const formattedVietnamTimeStr = formatVietnamTime(vietnamTime);

    // Send emails (confirmation to patient + alert to concierge@dentalntk.com)
    await sendNewAppointmentNotification({
      name: data.patient_name,
      email: data.email,
      phone: data.phone,
      treatment: data.service_id,
      vietnamTimeStr: formattedVietnamTimeStr
    });

    return NextResponse.json({
      success: true,
      message: 'Appointment booking received successfully',
      data: appointment
    });

  } catch (error) {
    console.error('API Error /api/appointments:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}
