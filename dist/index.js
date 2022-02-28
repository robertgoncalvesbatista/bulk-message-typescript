"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmailService_1 = __importDefault(require("./services/EmailService"));
const csvService_1 = __importDefault(require("./services/csvService"));
new EmailService_1.default().sendMessage({
    to: {
        name: "Robert Gonçalves Batista",
        email: "robert.comunicar@gmail.com",
    },
    message: {
        subject: "Bem-vindo ao sistema",
        body: "Seja bem-vindo!",
    },
});
new csvService_1.default().load();
