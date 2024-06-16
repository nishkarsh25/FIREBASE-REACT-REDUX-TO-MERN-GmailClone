import express from "express";
import { createEmail, deleteEmail, getAllEmailById } from "../controllers/emailController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/create").post(isAuthenticated,createEmail);
router.route("/:id").delete(isAuthenticated,deleteEmail);


