require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// In-Memory Database Store for Task 3 (Admin Dashboard)
let enquiries = [];

// Configure Nodemailer SMTP Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP Connection on server start
transporter.verify((error) => {
  if (error) console.error("❌ SMTP Connection Failed:", error.message);
  else console.log("✅ SMTP Connection Successful");
});

// Helper Function: Email Format Validation Regex
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ==========================================
// TASK 1 & 2: POST /api/contact (With Strict Backend Validation)
// ==========================================
app.post("/api/contact", async (req, res) => {
  try {
    let { name, email, phone, message } = req.body;

    // 1. Check for Empty Values & Required Fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Validation Error: Name, email, and message are required fields.",
      });
    }

    // Trim whitespace
    name = name.trim();
    email = email.trim();
    message = message.trim();
    phone = phone ? phone.trim() : "";

    // 2. Name Length Validation
    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Validation Error: Name must be between 2 and 50 characters.",
      });
    }

    // 3. Email Format Validation
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Validation Error: Please provide a valid email address.",
      });
    }

    // 4. Message Length Validation
    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Validation Error: Message must be between 10 and 1000 characters.",
      });
    }

    // Create New Enquiry Object (Task 3 Store)
    const newEnquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "Not Provided",
      message,
      status: "Pending", // Options: 'Pending', 'In Progress', 'Resolved'
      createdAt: new Date().toISOString(),
    };

    // Store in-memory
    enquiries.unshift(newEnquiry);

    // 5. Send Email via SMTP
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted and email sent successfully!",
      data: newEnquiry,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error: Unable to send enquiry.",
    });
  }
});

// ==========================================
// TASK 3: ADMIN DASHBOARD API ENDPOINTS
// ==========================================

// GET /api/enquiries - Fetch all with Search & Filter
app.get("/api/enquiries", (req, res) => {
  const { search, status } = req.query;
  let result = [...enquiries];

  if (status && status !== "All") {
    result = result.filter((item) => item.status === status);
  }

  if (search) {
    const term = search.toLowerCase();
    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.email.toLowerCase().includes(term) ||
        item.message.toLowerCase().includes(term)
    );
  }

  res.status(200).json({ success: true, count: result.length, data: result });
});

// PATCH /api/enquiries/:id - Change Enquiry Status
app.patch("/api/enquiries/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const enquiry = enquiries.find((item) => item.id === id);
  if (!enquiry) {
    return res.status(404).json({ success: false, message: "Enquiry not found." });
  }

  if (status) enquiry.status = status;

  res.status(200).json({ success: true, message: "Status updated.", data: enquiry });
});

// DELETE /api/enquiries/:id - Delete Enquiry
app.delete("/api/enquiries/:id", (req, res) => {
  const { id } = req.params;
  enquiries = enquiries.filter((item) => item.id !== id);
  res.status(200).json({ success: true, message: "Enquiry deleted successfully." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));