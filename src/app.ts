import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
require('dotenv').config(); 


const app = express();
const port = 3000; // Change this to your desired port

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle POST requests to /sendemail\
type RequestBody = {
  name: string;
  email: string;
  age: number;
  gender: string;
};

app.post('/sendemail', (req, res) => {
  const { name, email, age, gender } = req.body as RequestBody;

  console.log('Request body:', req.body);
  console.log(process.env.EMAIL);

  const username=generateUsername(email);

  // Create a Nodemailer transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:process.env.EMAIL, // Replace with your email
      pass: process.env.PASSWORD // Replace with your email password or an app password
    }
  });

  // Email content
  const mailOptions = {
    from:process.env.EMAIL, // Replace with your email
    to: email,
    subject: 'Welcome to VR Rescue X App!',
    html: `Hello ${name},\n\nWelcome to VR RESCUES X! \n  Thank you for signing up.\n\nRegards,\nYour App Team,., Your username is <b> ${username} </b> `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully',username:username });
    }
  });
});

const generateUsername=(email:string)=>{
  const username=email.split('@')[0];
  return "VRX-"+username;
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
