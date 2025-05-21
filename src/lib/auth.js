import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import Admin from '@/models/Admin';
import dbConnect from '@/lib/dbConnect';

export async function verifyToken() {
  await dbConnect();

  const token = cookies().get('adminToken')?.value;

  if (!token) {
    return { error: true, message: 'No token, authorization denied' };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return { error: true, message: 'Admin not found' };
    }

    return { error: false, admin };
  } catch (error) {
    return { error: true, message: 'Token is not valid' };
  }
}
