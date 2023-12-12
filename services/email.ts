import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const sendMail=(email:string,username:string,name:string,callback:(err: Error | null, info: SMTPTransport.SentMessageInfo) => void)=>{
  console.log("email",email);
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
    html: `<div>Hello ${name},</div>\n\n<div>Welcome to VR RESCUES X! \n </div> <div>Thank you for signing up.</div>\n\nRegards,\nYour VR Rescue X Team,., Your username is <b> ${username} </b> `
  };

  // Send the email
  return transporter.sendMail(mailOptions,callback)
}