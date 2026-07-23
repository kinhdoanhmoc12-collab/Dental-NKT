import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { text, from, to } = await req.json();
    if (!text) {
      return NextResponse.json({ success: false, error: 'Thiếu nội dung dịch.' }, { status: 400 });
    }

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from || 'en'}&tl=${to || 'vi'}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Google Translate API error: ${response.status}`);
    }
    const data = await response.json();
    const translated = data[0].map((item: any) => item[0]).join('');
    
    return NextResponse.json({ success: true, data: translated });
  } catch (error: any) {
    console.error('Translation Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
