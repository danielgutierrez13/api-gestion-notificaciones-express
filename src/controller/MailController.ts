import { Request, Response } from 'express';
import { FormRequestBody } from "./request/FormRequestBody";
import { mailService } from "../service/MailService";

class MailController {
  async handleForm(req: Request<{}, {}, FormRequestBody>, res: Response): Promise<void> {
    try {
      await mailService.handleSendMail(req.body);
      res.send({
        message: "Mensaje Enviado",
        status: true
      });
    } catch (err) {
      let errorMessage = "Error al enviar email.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      res.status(500).send({
        message: errorMessage,
        status: false
      });
    }
  }
}

export const mailController = new MailController();
