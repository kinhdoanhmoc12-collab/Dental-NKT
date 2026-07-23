import { NextResponse } from 'next/server';
import { getWarrantyClaims, createWarrantyClaim, updateWarrantyClaimStatus, deleteWarrantyClaim } from '../../../lib/db';
import { verifyJwt } from '../../../lib/auth';

function isAuthorized(req: Request): boolean {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.substring(7);
  const secret = process.env.JWT_SECRET || 'HARVARD_SUPER_SECRET_KEY_FOR_JWT';
  const payload = verifyJwt(token, secret);
  return payload !== null;
}

// Create a new claim (Public)
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, phone, email, serial, description } = body;

    if (!full_name || !phone || !description) {
      return NextResponse.json(
        { success: false, error: 'Vui lòng nhập đầy đủ các trường bắt buộc.' },
        { status: 400 }
      );
    }

    const claim = await createWarrantyClaim({
      full_name,
      phone,
      email: email || '',
      serial: serial || '',
      description
    });

    return NextResponse.json({ success: true, data: claim });
  } catch (error) {
    console.error('API Error POST /api/warranty:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}

// Get all claims (Admin only)
export async function GET(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const claims = await getWarrantyClaims();
    // Sort claims by createdAt desc
    const sorted = [...claims].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json({ success: true, data: sorted });
  } catch (error) {
    console.error('API Error GET /api/warranty:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}

// Update status (Admin only)
export async function PUT(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'Thiếu id hoặc status.' }, { status: 400 });
    }

    const updated = await updateWarrantyClaimStatus(id, status);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Không tìm thấy yêu cầu bảo hành.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('API Error PUT /api/warranty:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}

// Delete claim (Admin only)
export async function DELETE(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Thiếu id yêu cầu.' }, { status: 400 });
    }

    const success = await deleteWarrantyClaim(id);
    if (!success) {
      return NextResponse.json({ success: false, error: 'Không tìm thấy yêu cầu để xóa.' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error DELETE /api/warranty:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred' },
      { status: 500 }
    );
  }
}
