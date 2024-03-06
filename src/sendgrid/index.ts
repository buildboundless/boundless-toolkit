import client from "@sendgrid/mail";

client.setApiKey(process.env.SENDGRID_API_KEY as string);

/**
 * Email a single user utilizing a dynamic template
 * @param to - The email address of the recipient
 * @param data - Data to be passed to the template
 * @param templateId - Template ID from sendgrid
 */
export async function sendTemplateEmail(
    to: string,
    data: Object,
    templateId: string
) {
    const message = {
        from: process.env.SEND_FROM_EMAIL as string,
        personalizations: [
            {
                to: [
                    {
                        email: to,
                    },
                ],
                dynamic_template_data: data,
            },
        ],
        template_id: templateId,
        tracking_settings: {
            subscription_tracking: {
                enable: false,
            },
        },
    };

    // @ts-ignore
    return client.send(message);
}