import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req: any, res: any, next: any) {
    /// Token exists if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    const { pathname } = req.nextUrl;

    // Allow if request ios from next-auth session and provider fetching or the token exists
    if (pathname.includes('/api/auth') || token) { return NextResponse.next(); }

    // Redirect to login if they dont have a token and are requesting a protected route
    if (!token && pathname !== '/login') { return NextResponse.redirect('/login'); }

    
}