# SendGrid Tools

## Setup

1. [Set Up Domain Authentication for your domain.](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)
2. Set `SENDGRID_API_KEY` environment variable to your SendGrid API key.
3. Set `SENDGRID_FROM_EMAIL` environment variable to a verified sender email.

[SendGrid API Key Documentation](https://docs.sendgrid.com/ui/account-and-settings/api-keys)

## Usage

The best way to use this library is to create helper functions for each email you want to send.

```typescript
import { sendTemplateEmail } from 'boundless-toolkit';

/**
 * Add all variables used in the SendGrid template here.
 */
interface SendPasswordResetEmailData {
    url: string
}

export async function sendPasswordResetEmail(to: string, data: SendPasswordResetEmailData) {
    return sendTemplateEmail(to, data, 'TEMPLATE_ID')
}
```

```typescript
import { sendPasswordResetEmail } from './email-helpers';

sendPasswordResetEmail('example@buildboundless.com', {
    url: 'https://example.com/reset-password'
})
```