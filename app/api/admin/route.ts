import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';


export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('studenttracker');
    const admin = await db.collection('admin').find().toArray();

    return NextResponse.json({success: true, admin})

  } catch (error: any) {
    return NextResponse.json({success: false, error: 'missing fields!'}, {status: 400})
  }
}



export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('studenttracker');
    const body = await req.json();

    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    const admin = await db.collection('admin').findOne({ username, password });

    if (!admin) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json({ success: true, message: 'Login successful', admin });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
