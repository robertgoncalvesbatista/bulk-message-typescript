import "dotenv/config";

import nodemailer from "nodemailer";
import sendgrid from "nodemailer-sendgrid";

import IMessageDTO from "../types/index";

export default class EmailService {
    sendMessage({ to, message }: IMessageDTO) {
        const transport = nodemailer.createTransport(
            sendgrid({
                apiKey: process.env.SENDGRID_API_KEY,
            })
        );

        transport.sendMail({
            from: process.env.EMAIL_FROM,
            to: to.email,
            subject: message.subject,
            text: message.body,
        });

        return transport;
    }
}
