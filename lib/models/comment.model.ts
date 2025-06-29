import mongoose, { Schema, models } from "mongoose";

const CommentSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null, // null means it's a top-level comment
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Comment = models.Comment || mongoose.model("Comment", CommentSchema);
export default Comment;












