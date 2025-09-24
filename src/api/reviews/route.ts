import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("mydb"); // change "mydb" to your database name
    const reviews = await db.collection("reviews").find().sort({ _id: -1 }).toArray();

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("❌ GET /api/reviews error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();
    if (!name || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("mydb"); // same as above
    const newReview = {
      name,
      message,
      date: new Date().toLocaleString(),
    };

    const result = await db.collection("reviews").insertOne(newReview);
    return NextResponse.json({ _id: result.insertedId, ...newReview }, { status: 201 });
  } catch (error) {
    console.error("❌ POST /api/reviews error:", error);
    return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
  }
}
