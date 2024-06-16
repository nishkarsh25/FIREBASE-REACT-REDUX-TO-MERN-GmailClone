import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, password} = req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "sAll fields are required" });
        }
        

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists with this email",success:false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // profilePhoto
        const profilePhoto = `https://avatar.iran.liara.run/public/boy?`;

        await User.create({
            fullname,
            email,
            password: hashedPassword,
            profilePhoto
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
};




