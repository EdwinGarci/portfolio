import 'dotenv/config';
import env from 'env-var';
const { get } = env;


export const envs = {
    // MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
    MAILER_EMAIL: get('MAILER_EMAIL').required().asEmailString(),
    MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),
}



