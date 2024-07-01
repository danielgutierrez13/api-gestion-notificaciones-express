import request from 'supertest';
import app from '../../src/app';
import {mailService} from '../../src/service/MailService';

jest.mock('../../src/service/MailService');

describe('MailController', () => {
  it('should respond with success message when email is sent', async () => {
    jest.spyOn(mailService, 'handleSendMail').mockResolvedValue();

    const form = {
      email: 'test@example.com',
      asunto: 'Test Subject',
      mensaje: 'Test Message',
    };

    const response = await request(app)
      .post('/api/send-email')
      .send(form)
      .expect(200);

    expect(response.body).toEqual({
      message: 'Mensaje Enviado',
      status: true,
    });
  });

  it('should respond with error message when email sending fails', async () => {
    jest.spyOn(mailService, 'handleSendMail').mockRejectedValue(new Error('Send mail failed'));

    const form = {
      email: 'test@example.com',
      asunto: 'Test Subject',
      mensaje: 'Test Message',
    };

    const response = await request(app)
      .post('/api/send-email')
      .send(form)
      .expect(500);

    expect(response.body).toEqual({
      message: 'Send mail failed',
      status: false,
    });
  });
});
