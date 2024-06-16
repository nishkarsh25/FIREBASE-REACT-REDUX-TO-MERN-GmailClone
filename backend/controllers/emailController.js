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

export const deleteEmail = async (req, res) => {
  try {
    const emailId = req.params.id;

    if (!emailId)
      return res.status(400).json({ message: "Email id is required" });

    const email = await Email.findOneAndDelete({_id: emailId});

    if (!email) return res.status(404).json({ message: "Email is not found" });

    return res.status(201).json({
      message: "Email Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAllEmailById = async (req, res) => {
  try {
    const userId = req.id;

    const emails = await Email.find({ userId });

    return res.status(200).json(emails);
  } catch (error) {
    console.log(error);
  }
};
