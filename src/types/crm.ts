export interface BlogPost {
  id?: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  titleEN: string;
  titleVN: string;
  excerptEN: string;
  excerptVN: string;
  contentEN: string;
  contentVN: string;
}

export interface LeadItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  treatment_interest: string;
  message: string;
  x_ray_file_url?: string;
  status: "NEW" | "CONTACTED" | "CONVERTED" | string;
  created_at?: string;
  createdAt?: string;
}

export interface WarrantyClaim {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  serial: string;
  description: string;
  status: "PENDING" | "RESOLVED" | "REJECTED" | string;
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  patient_name: string;
  rating: number;
  content: string;
  is_published: boolean;
  created_at?: string;
  createdAt?: string;
}
