import fs from 'fs';
import path from 'path';

// Flexible interface for Prisma operations to remain resilient when Prisma client is not generated
export interface PrismaClientType {
  lead: { create: (args: { data: Record<string, unknown> }) => Promise<unknown> };
  appointment: { create: (args: { data: Record<string, unknown> }) => Promise<unknown> };
  review: { findMany: (args: { where: { is_published: boolean } }) => Promise<unknown[]> };
  dentist: { findMany: () => Promise<unknown[]> };
}

let prismaInstance: PrismaClientType | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const prismaModule = require('@prisma/client');
  if (prismaModule && prismaModule.PrismaClient) {
    prismaInstance = new prismaModule.PrismaClient();
  }
} catch {
  // Graceful fallback for environments with missing client binaries
  prismaInstance = null;
}

export const prisma = prismaInstance;

export interface ReviewItem {
  id: string;
  patient_name: string;
  rating: number;
  content: string;
  is_published: boolean;
}

export interface DentistItem {
  id: string;
  name: string;
  specialization: string;
  bio: string;
  image_url: string;
}

export interface WarrantyClaimItem {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  serial: string;
  description: string;
  status: "PENDING" | "RESOLVED" | "REJECTED";
  createdAt: string;
}

export interface DbStore {
  leads: Record<string, unknown>[];
  appointments: Record<string, unknown>[];
  reviews: ReviewItem[];
  dentists: DentistItem[];
  warrantyClaims?: WarrantyClaimItem[];
}

// Mock database file setup
const MOCK_DB_PATH = path.join(process.cwd(), 'prisma', 'mock_db.json');

function initializeMockDb(): DbStore {
  if (fs.existsSync(MOCK_DB_PATH)) {
    try {
      const data = JSON.parse(fs.readFileSync(MOCK_DB_PATH, 'utf8')) as DbStore;
      if (!data.warrantyClaims) {
        data.warrantyClaims = [];
      }
      return data;
    } catch {
      // Fall through to rewrite
    }
  }

  const initialData: DbStore = {
    leads: [],
    appointments: [],
    reviews: [
      {
        id: "r1",
        patient_name: "Sarah Jenkins",
        rating: 5,
        content: "I was quoted over $35,000 AUD in Melbourne. Coming to DentalNTK was the best decision of my life. I saved over $20,000, and the quality of their care was superior to any clinic back home.",
        is_published: true
      },
      {
        id: "r2",
        patient_name: "David Mitchell",
        rating: 5,
        content: "The cosmetic precision at DentalNTK is outstanding. They used 3D imaging to show me my exact smile layout beforehand. I got 16 E.max Veneers done in 6 days, and they look completely natural.",
        is_published: true
      },
      {
        id: "r3",
        patient_name: "Mark Thompson",
        rating: 5,
        content: "I needed two implants. The clinic layout is modern, clean, and has a spa-like vibe that removes all dental anxiety. Their pricing was highly transparent and they helped directly with insurance paperwork.",
        is_published: true
      }
    ],
    dentists: [
      {
        id: "d1",
        name: "Dr. Nguyen Thi Thuy Hang",
        specialization: "Cosmetic Dentistry & Implant Specialist",
        bio: "Extensive expertise in Implants, wisdom tooth extraction, gum recession treatment, gummy smile correction, severe periodontitis, and prosthetics. Applying digital dentistry since 2020.",
        image_url: "/dr_emily.png"
      },
      {
        id: "d2",
        name: "Dr. Nguyen Huy Hoang",
        specialization: "Head of Implantology",
        bio: "Orthodontic training at Cologne University (Germany). Specialist in Orthodontics, Implants, Aesthetic Dentistry, and TMJ Disorders. Pioneer in digital dentistry applications and International Invisalign Specialist.",
        image_url: "/dr_phong.png"
      },
      {
        id: "d3",
        name: "Dr. Pham Xuan Dang",
        specialization: "Orthodontics & Endodontics Specialist",
        bio: "Orthodontic training at Hanoi Medical University. Specialist in adult & early pediatric orthodontics, endodontic therapy, and digital dentistry applications.",
        image_url: "/dr_hung.png"
      }
    ],
    warrantyClaims: []
  };

  try {
    fs.mkdirSync(path.dirname(MOCK_DB_PATH), { recursive: true });
    fs.writeFileSync(MOCK_DB_PATH, JSON.stringify(initialData, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to create mock_db.json file:', err);
  }

  return initialData;
}

// Read database
export async function getDbData(): Promise<DbStore> {
  return initializeMockDb();
}

// Save database
export async function saveDbData(data: DbStore): Promise<boolean> {
  try {
    fs.writeFileSync(MOCK_DB_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Failed to save to mock_db.json:', err);
    return false;
  }
}

// ----------------------------------------------------------------
// HIGH-LEVEL DATABASE OPERATIONS (Resilient to Prisma/No-Prisma)
// ----------------------------------------------------------------

export async function createLead(leadData: {
  name: string;
  email: string;
  phone: string;
  country: string;
  treatment_interest: string;
  message?: string;
  x_ray_file_url?: string;
}) {
  if (prisma) {
    try {
      return await prisma.lead.create({ data: leadData });
    } catch (err) {
      console.warn('Prisma insert failed, falling back to mock database', err);
    }
  }

  // Fallback
  const db = await getDbData();
  const newLead = {
    id: `lead_${Date.now()}`,
    ...leadData,
    status: "NEW",
    createdAt: new Date().toISOString()
  };
  db.leads.push(newLead);
  await saveDbData(db);
  return newLead;
}

export async function createAppointment(appointmentData: {
  patient_name: string;
  email: string;
  phone: string;
  date_time: Date;
  service_id: string;
}) {
  if (prisma) {
    try {
      return await prisma.appointment.create({ data: appointmentData });
    } catch (err) {
      console.warn('Prisma insert failed, falling back to mock database', err);
    }
  }

  // Fallback
  const db = await getDbData();
  const newAppointment = {
    id: `apt_${Date.now()}`,
    ...appointmentData,
    date_time: appointmentData.date_time.toISOString(),
    status: "PENDING",
    createdAt: new Date().toISOString()
  };
  db.appointments.push(newAppointment);
  await saveDbData(db);
  return newAppointment;
}

export async function getPublishedReviews(): Promise<ReviewItem[]> {
  if (prisma) {
    try {
      const results = await prisma.review.findMany({
        where: { is_published: true }
      });
      return results as ReviewItem[];
    } catch (err) {
      console.warn('Prisma query failed, falling back to mock database', err);
    }
  }

  const db = await getDbData();
  return db.reviews.filter((r) => r.is_published);
}

export async function getDentistsList(): Promise<DentistItem[]> {
  if (prisma) {
    try {
      const results = await prisma.dentist.findMany();
      return results as DentistItem[];
    } catch (err) {
      console.warn('Prisma query failed, falling back to mock database', err);
    }
  }

  const db = await getDbData();
  return db.dentists;
}

// ----------------------------------------------------------------
// WARRANTY CLAIMS OPERATIONS
// ----------------------------------------------------------------

export async function createWarrantyClaim(claimData: {
  full_name: string;
  phone: string;
  email: string;
  serial: string;
  description: string;
}) {
  const db = await getDbData();
  if (!db.warrantyClaims) {
    db.warrantyClaims = [];
  }
  const newClaim: WarrantyClaimItem = {
    id: `claim_${Date.now()}`,
    ...claimData,
    status: "PENDING",
    createdAt: new Date().toISOString()
  };
  db.warrantyClaims.push(newClaim);
  await saveDbData(db);
  return newClaim;
}

export async function getWarrantyClaims(): Promise<WarrantyClaimItem[]> {
  const db = await getDbData();
  return db.warrantyClaims || [];
}

export async function updateWarrantyClaimStatus(id: string, status: "PENDING" | "RESOLVED" | "REJECTED") {
  const db = await getDbData();
  if (!db.warrantyClaims) return null;
  const index = db.warrantyClaims.findIndex(c => c.id === id);
  if (index === -1) return null;
  db.warrantyClaims[index].status = status;
  await saveDbData(db);
  return db.warrantyClaims[index];
}

export async function deleteWarrantyClaim(id: string) {
  const db = await getDbData();
  if (!db.warrantyClaims) return false;
  const originalLength = db.warrantyClaims.length;
  db.warrantyClaims = db.warrantyClaims.filter(c => c.id !== id);
  await saveDbData(db);
  return db.warrantyClaims.length < originalLength;
}
