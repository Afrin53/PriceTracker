import { connectToDB } from "@/lib/mongoose";
import Comment from "@/lib/models/comment.model";
import { NextResponse, NextRequest } from "next/server";

// GET: fetch all comments for a product
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return new NextResponse("Product ID is required", { status: 400 });
  }

  try {
    await connectToDB();
    const comments = await Comment.find({ productId }).sort({ createdAt: -1 });
    return NextResponse.json(comments);
  } catch (error) {
    console.error("GET /api/comments error:", error);
    return new NextResponse("Failed to fetch comments", { status: 500 });
  }
}

// POST: add a new comment
export async function POST(request: NextRequest) {
  const { productId, username, message, parentId} = await request.json();

  if (!productId || !username || !message) {
    return new NextResponse("All fields are required", { status: 400 });
  }

  try {
    await connectToDB();
    const newComment = await Comment.create({ productId, username, message, parentId });
    return NextResponse.json(newComment);
  } catch (error) {
    console.error("POST /api/comments error:", error);
    return new NextResponse("Failed to post comment", { status: 500 });
  }
}

