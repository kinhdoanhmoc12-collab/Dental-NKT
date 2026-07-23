import { NextResponse } from 'next/server';
import { getPublishedReviews } from '../../../../lib/db';

export async function GET() {
  try {
    const reviews = await getPublishedReviews();
    return NextResponse.json({ success: true, data: reviews });
  } catch (error) {
    console.error('API Error /api/public/reviews:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve patient reviews' },
      { status: 500 }
    );
  }
}
