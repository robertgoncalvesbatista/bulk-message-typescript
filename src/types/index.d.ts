interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
}

export default interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}
