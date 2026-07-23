import { NextResponse } from 'next/server';
import { getDentistsList } from '../../../../lib/db';

export async function GET() {
  try {
    const dentists = await getDentistsList();
    return NextResponse.json({ success: true, data: dentists });
  } catch (error) {
    console.error('API Error /api/public/dentists:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve dentists list' },
      { status: 500 }
    );
  }
}
