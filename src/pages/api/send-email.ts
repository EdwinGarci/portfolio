import type { APIRoute } from 'astro';
import { EmailService } from '../../services/email.service';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const { email, subject, message } = await request.json();

        const emailService = new EmailService();
        await emailService.sendEmail({
            from: email,
            subject,
            html: `<p>${message}</p>`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        let errorMessage = 'Unknown error';
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
    }
};
