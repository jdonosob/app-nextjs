import { NextResponse } from "next/server";

// Testing api requests inside NextJS

export async function GET() {
    return NextResponse.json({ message: "Hello, World!" });
}

export async function POST(request: Request) {
    const data = await request.json();
    const { name } = data;
    return NextResponse.json({
        message: `Hello, ${name}!`
    });
}
