import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { FormRequestBody } from "../controller/request/FormRequestBody";

dotenv.config();

const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASS!;
const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = parseInt(process.env.SMTP_PORT!, 10);

class MailComponent {
  async sendMail(form: FormRequestBody, htmlEmail: string): Promise<void> {
    let transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    let mailOptions = {
      from: SMTP_USER,
      to: form.email,
      replyTo: SMTP_USER,
      subject: form.asunto,
      text: form.mensaje,
      html: htmlEmail
    };

    await transporter.sendMail(mailOptions);
  }
}

export const mailComponent = new MailComponent();
