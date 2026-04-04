import expressAsyncHandler from "express-async-handler";
import { User } from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs";
export const signup = expressAsyncHandler(async (req, res) => {
    const { email, password, fullName } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(409).json({ message: "Email address is already taken :(" });
        return;
    }
    ;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
        email,
        fullName,
        password: hashedPassword,
    });
    if (user) {
        generateToken(user.id, res);
        res.status(201).json({ message: "New account created" });
    }
    else {
        res.status(500).json({ message: "Internal server error" });
    }
    ;
});
export const login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
    }
    generateToken(user.id, res);
    res.status(200).json({ message: "Successfully logged in" });
});
export const logout = expressAsyncHandler(async (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Successfully logged out" });
});
//# sourceMappingURL=user.controller.js.map