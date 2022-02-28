"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_sendgrid_1 = __importDefault(require("nodemailer-sendgrid"));
class EmailService {
    sendMessage({ to, message }) {
        const transport = nodemailer_1.default.createTransport((0, nodemailer_sendgrid_1.default)({
            apiKey: process.env.SENDGRID_API_KEY,
        }));
        transport.sendMail({
            from: process.env.EMAIL_FROM,
            to: to.email,
            subject: message.subject,
            text: message.body,
        });
        return transport;
    }
}
exports.default = EmailService;
