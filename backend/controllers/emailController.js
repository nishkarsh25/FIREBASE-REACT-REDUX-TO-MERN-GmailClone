import { Email } from "../models/emailModel.js";

export const createEmail = async (req, res) => {
  try {
    const userId = req.id;
    console.log(1)
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const email = await Email.create({
      to,
      subject,
      message,
      userId,
    });

    return res.status(201).json({
      email,
    });
  } catch (error) {
    console.log(error);
  }
};




