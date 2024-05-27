const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "retta.turner44@ethereal.email",
    pass: "5dJxHGGsKafn1AC8v3",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "Arnaud Igor <myEmail@gmail.com>", // sender address
    to: "myEmail@gmail.com", // list of receivers
    subject: "Test Mail", // Subject line
    text: "Test d'envoi de mail", // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message envoyé avec succès: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
