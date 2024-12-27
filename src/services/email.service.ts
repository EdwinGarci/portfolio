import { envs, ResendAdapter } from "../utils";

export interface SendMailOptions {
    from: string;
    subject: string;
    html: string;
}

export class EmailService {
    private resendAdapter: ResendAdapter;
    private readonly fixedRecipient: string;

    constructor() {
        this.resendAdapter = new ResendAdapter();
        this.fixedRecipient = envs.MAILER_SECRET_KEY;
    }

    async sendEmail(options: SendMailOptions): Promise<Boolean> {
        const { from, subject, html } = options;
        try {
            await this.resendAdapter.sendEmail(from, this.fixedRecipient, subject, html);
            return true;
        } catch (error) {
            throw new Error('Failed to send email. Please try again later.');
            return false;
        }
    }
}