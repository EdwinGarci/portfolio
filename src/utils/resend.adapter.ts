import { Resend } from 'resend';
import { envs } from './env.adapter'

export class ResendAdapter {
    private resend: Resend;

    constructor() {
        this.resend = new Resend(envs.MAILER_SECRET_KEY);
    }

    async sendEmail(from: string, to: string, subject: string, html: string) {
        return this.resend.emails.send({
            from,
            to,
            subject,
            html,
        });
    }
}