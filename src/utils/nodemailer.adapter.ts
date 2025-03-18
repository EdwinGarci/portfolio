import nodemailer from "nodemailer";
import { envs } from './env.adapter';

export class NodemailerAdapter {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: envs.SMTP_HOST,
            port: Number(envs.SMTP_PORT),
            secure: false,
            auth: {
                user: envs.SMTP_USER,
                pass: envs.SMTP_PASS
            }
        });
    }

    async sendEmail(from: string, subject: string, html: string) {
        const to = envs.MAILER_TO;
        
        try {
            const info = await this.transporter.sendMail({
                from,
                to, 
                subject,
                html
            });
            return true;
        } catch (error) {
            return false;
        }
    }
}
