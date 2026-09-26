require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-Memory Database for Appointments
let appointments = [];

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP Connection
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error.message);
  } else {
    console.log("✅ Healthcare SMTP Connection Successful - Ready to send emails!");
  }
});

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Healthcare Backend is running smoothly." });
});

// Appointment Form Submission Endpoint
app.post("/api/appointment", async (req, res) => {
  const { name, email, phone, department, doctor, date, notes } = req.body;

  if (!name || !email || !phone || !date) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields (Name, Email, Phone, Date).",
    });
  }

  const appointmentData = {
    id: Date.now(),
    name,
    email,
    phone,
    department: department || "General Medicine",
    doctor: doctor || "Any Specialist",
    date,
    notes: notes || "None",
    submittedAt: new Date().toISOString(),
  };

  appointments.push(appointmentData);

  const mailOptions = {
    from: `"Healthcare Center" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    subject: `🩺 New Patient Appointment: ${name}`,
    html: `
      <h2>New Appointment Booking Request</h2>
      <p><strong>Patient Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Department:</strong> ${department || "General Medicine"}</p>
      <p><strong>Selected Doctor:</strong> ${doctor || "Any Specialist"}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Notes / Symptoms:</strong> ${notes || "None"}</p>
      <hr>
      <p><small>Booked on ${new Date().toLocaleString()}</small></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      success: true,
      message: "Appointment request submitted and confirmation email sent!",
      data: appointmentData,
    });
  } catch (err) {
    console.error("❌ Mail Error:", err);
    return res.status(200).json({
      success: true,
      message: "Appointment recorded successfully, but email notification failed.",
      data: appointmentData,
    });
  }
});

// Get List of All Appointments
app.get("/api/appointments", (req, res) => {
  res.status(200).json({
    success: true,
    count: appointments.length,
    data: appointments,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Healthcare Backend running on http://localhost:${PORT}`);
});