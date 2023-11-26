import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // to add the unique user name
    },
    email: {
      type: String,
      required: true,
      unique: true, // to add the unique user name
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/666/666201.png"
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
