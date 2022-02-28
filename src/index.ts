import EmailService from "./services/EmailService";
import csvService from "./services/csvService";

/*
new EmailService().sendMessage({
    to: {
        name: "Robert Gonçalves Batista",
        email: "robert.comunicar@gmail.com",
    },
    message: {
        subject: "Bem-vindo ao sistema",
        body: "Seja bem-vindo!",
    },
});
*/

new csvService().load();
