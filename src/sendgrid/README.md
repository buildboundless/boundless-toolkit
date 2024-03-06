# SendGrid Tools

## Setup

1. [Set Up Domain Authentication for your domain.](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)
2. Set `SENDGRID_API_KEY` environment variable to your SendGrid API key.
3. Set `SENDGRID_FROM_EMAIL` environment variable to a verified sender email.

[SendGrid API Key Documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys)

## Usage

The best way to use this library is to create helper functions for each email you want to send.

Example
```typescript
import { sendTemplateEmail } from 'boundless-toolkit';

export async function sendPasswordResetEmail(to: string, reset_link: string) {
    const data = {
        password_reset_url: reset_link
    }
    return sendTemplateEmail(to, data, PASSWORD_RESET_TEMPLATE_ID)
}
```