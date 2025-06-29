import { connectToDB } from "@/lib/mongoose";
import Comment from "@/lib/models/comment.model";
import { NextResponse } from "next/server";

export async function PATCH(_: any, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const updated = await Comment.findByIdAndUpdate(
      params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    return NextResponse.json(updated);
  } catch (error) {
    return new NextResponse("Failed to like comment", { status: 500 });
  }
}
