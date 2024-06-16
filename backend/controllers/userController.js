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
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            })
        };
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect username or password",
                success: false
            })
        };
        const tokenData = {
            userId: user._id
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            message:`${user.fullname} logged in successfully`,
            user
        });

    } catch (error) {
        console.log(error);
    }
}


export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "logged out successfully."
        })
    } catch (error) {
        console.log(error);
    }
}
