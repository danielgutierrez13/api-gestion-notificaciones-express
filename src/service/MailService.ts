import { FormRequestBody } from "../controller/request/FormRequestBody";
import { mailComponent } from "../component/MailComponent";

class MailService {
  async handleSendMail(form: FormRequestBody): Promise<void> {
    const htmlEmail = `
      <h3>Hemos recibido tu mensaje: </h3>
      <ul>
        <li>Email: ${form.email}</li>
        <li>Asunto: ${form.asunto}</li>
      </ul>
      <h3>Mensaje</h3>
      <p>${form.mensaje}</p>
      <h3>Pronto nos pondremos en contacto</h3>
    `;
    await mailComponent.sendMail(form, htmlEmail);
  }
}

export const mailService = new MailService();
