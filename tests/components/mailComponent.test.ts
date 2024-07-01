import * as nodemailer from 'nodemailer';
import { FormRequestBody } from "../../src/controller/request/FormRequestBody";
import { mailComponent } from "../../src/component/MailComponent";

jest.mock('nodemailer');

describe('MailComponent', () => {
  it('should send an email', async () => {
    const mockSendMail = jest.fn().mockResolvedValue('Email sent');
    (nodemailer.createTransport as jest.Mock).mockReturnValue({
      sendMail: mockSendMail,
    });

    const form: FormRequestBody = {
      email: 'test@example.com',
      asunto: 'Test Subject',
      mensaje: 'Test Message',
    };

    await mailComponent.sendMail(form, '<p>Test Message</p>');

    expect(mockSendMail).toHaveBeenCalledWith(expect.objectContaining({
      from: 'daniel.gutierrez13@outlook.com',
      to: 'test@example.com',
      subject: 'Test Subject',
      text: 'Test Message',
      html: '<p>Test Message</p>',
    }));
  });
});
