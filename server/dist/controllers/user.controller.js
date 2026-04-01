import expressAsyncHandler from "express-async-handler";
import { User } from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
export const signup = expressAsyncHandler(async (req, res) => {
    const { email, password, fullName } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(409).json({ message: "Email address is already taken :(" });
        return;
    }
    ;
    const user = await User.create({
        email,
        fullName,
        password,
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
});
export const logout = expressAsyncHandler(async (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Successfully logged out" });
});
//# sourceMappingURL=user.controller.js.map