import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mailController } from "./controller/MailController";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/api/send-email", (req, res) =>
    mailController.handleForm(req, res));

export default app;
