import { NodemailerAdapter } from "../utils";

export interface SendMailOptions {
    from: string;
    subject: string;
    html: string;
}

export class EmailService {
    private nodemailerAdapter: NodemailerAdapter;

    constructor() {
        this.nodemailerAdapter = new NodemailerAdapter();
    }

    async sendEmail(options: SendMailOptions): Promise<Boolean> {
        const { from, subject, html } = options;
        try {
            await this.nodemailerAdapter.sendEmail(from, subject, html);
            return true;
        } catch (error) {
            throw new Error('Failed to send email. Please try again later.');
        }
    }
}