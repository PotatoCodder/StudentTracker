import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';



export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('StudentTracker');
    const studentInfo = await db.collection("students").find().toArray();

    return NextResponse.json({
      sucess: true,
      studentInfo
    })
  } catch (error: any) {
      return NextResponse.json({ success: false, error: error.message });
  }
}