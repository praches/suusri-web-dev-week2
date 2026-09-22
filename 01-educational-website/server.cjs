require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

// In-Memory Database Store for Task 3
let enquiries = [];

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error) => {
  if (error) console.error("❌ SMTP Error:", error.message);
  else console.log("✅ SMTP Connection Successful");
});

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Task 1 & 2: Contact Form API with Validation
app.post("/api/contact", async (req, res) => {
  try {
    let { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email, and message are required." });
    }

    name = name.trim();
    email = email.trim();
    message = message.trim();

    if (name.length < 2 || name.length > 50) {
      return res.status(400).json({ success: false, message: "Name must be 2 to 50 characters." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format." });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({ success: false, message: "Message must be 10 to 1000 characters." });
    }

    const newEnquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || "Not Provided",
      message,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    enquiries.unshift(newEnquiry);

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ success: true, message: "Enquiry sent successfully!", data: newEnquiry });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error sending message." });
  }
});

// Task 3: Admin Dashboard Endpoints
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

  res.status(200).json({ success: true, data: result });
});

app.patch("/api/enquiries/:id", (req, res) => {
  const enquiry = enquiries.find((item) => item.id === req.params.id);
  if (!enquiry) return res.status(404).json({ success: false, message: "Not found." });
  if (req.body.status) enquiry.status = req.body.status;
  res.status(200).json({ success: true, data: enquiry });
});

app.delete("/api/enquiries/:id", (req, res) => {
  enquiries = enquiries.filter((item) => item.id !== req.params.id);
  res.status(200).json({ success: true, message: "Deleted." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));