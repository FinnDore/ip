import { NextResponse } from 'next/server';

export default function middleware(req: Request) {
    const params = new URLSearchParams({
        text: `My IP is ${
            req.headers.get('CF-Connecting-IP') ??
            req.headers.get('x-vercel-forwarded-for') ??
            req.headers.get('x-forwarded-for') ??
            'unknown'
        }!`,
    } as Record<string, string>);
    return NextResponse.redirect(
        `https://x.com/intent/tweet?${params.toString()}`
    );
}

export const config = {};
