import { mailComponent } from "../../src/component/MailComponent";
import { FormRequestBody } from "../../src/controller/request/FormRequestBody";
import { mailService } from "../../src/service/MailService";


jest.mock('../../src/component/MailComponent');

describe('MailService', () => {
  it('should handle send mail', async () => {
    const mockSendMail =
      jest.spyOn(mailComponent, 'sendMail').mockResolvedValue();

    const form: FormRequestBody = {
      email: 'test@example.com',
      asunto: 'Test Subject',
      mensaje: 'Test Message',
    };

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

    await mailService.handleSendMail(form);

    expect(mockSendMail).toHaveBeenCalledWith(form, htmlEmail);
  });
});