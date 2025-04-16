import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('studenttracker');
    const students = await db.collection('student').find().toArray();
    return NextResponse.json(
      {
        sucess: true,
        students
      }
    )
  } catch ( error: any ) {
    return NextResponse.json(
      {
        sucess: false,
        error: 'missing fields'
      },
      {
        status: 400
      }
    )
  }
}

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = await client.db('studenttracker');
    const body = await req.json();

    const { fullName, age, section, gpa} = body;

    if (!fullName || !age || !section || !gpa) {
      return NextResponse.json(
        {
          sucess: false,
          error: "Missing fields"
        },
        {
          status: 404
        }
      )
    }

    await db.collection('student').insertOne({
      fullName, age, section, gpa
    })

    return NextResponse.json(
      {
        sucess: true,
        message: "Student added sucessfully!"
      }
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        sucess: false,
        error: error.message
      },
      {
        status: 500
      }
  )
  }
}