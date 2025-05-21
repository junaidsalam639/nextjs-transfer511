import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Car from '@/models/Car';
import { verifyToken } from '@/lib/auth';

export async function GET() {
    await dbConnect();
  
    const authResponse = await verifyToken();
    if (authResponse.error) {
      return NextResponse.json({ message: authResponse.message }, { status: 401 });
    }
  
    try {
      const cars = await Car.find({});
      return NextResponse.json(cars, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Error fetching cars' }, { status: 500 });
    }
  }

export async function POST(req) {
    await dbConnect();

    const authResponse = await verifyToken(req);
    if (authResponse.error) {
        return NextResponse.json({ message: authResponse.message }, { status: 401 });
    }

    try {
        const body = await req.json();
        const car = new Car(body);
        await car.save();
        return NextResponse.json(car, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error creating car' }, { status: 400 });
    }
}
