const express = require('express');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    // Send email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} (Portfolio Contact)`,
      text: message,
      html: `
        <p>You have a new contact form submission</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error sending message' });
  }
});

module.exports = router;