import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Car from '@/models/Car';
import { verifyToken } from '@/lib/auth';

export async function GET(req, { params }) {
    await dbConnect();
    const { id } = params;

    const authResponse = await verifyToken(req);
    if (authResponse.error) {
        return NextResponse.json({ message: authResponse.message }, { status: 401 });
    }

    try {
        const car = await Car.findById(id);
        if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 });
        return NextResponse.json(car, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching car' }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    await dbConnect();
    const { id } = params;

    const authResponse = await verifyToken(req);
    if (authResponse.error) {
        return NextResponse.json({ message: authResponse.message }, { status: 401 });
    }

    try {
        const body = await req.json();
        const car = await Car.findByIdAndUpdate(id, body, { new: true });
        if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 });
        return NextResponse.json(car, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error updating car' }, { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    await dbConnect();
    const { id } = params;

    const authResponse = await verifyToken(req);
    if (authResponse.error) {
        return NextResponse.json({ message: authResponse.message }, { status: 401 });
    }

    try {
        const car = await Car.findByIdAndDelete(id);
        if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 });
        return NextResponse.json({ message: 'Car deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting car' }, { status: 500 });
    }
}
