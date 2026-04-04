import mongoose from "mongoose"
import type { UserType } from "../shared/types.js";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User",
    },
}, {
    timestamps: true,
});

export const User = mongoose.models.User || mongoose.model<UserType>("User", userSchema);