# Stripe Tools

## Setup

Set `STRIPE_SECRET_KEY` environment variable to your Stripe secret key.

[Stripe API Key Documentation](https://docs.stripe.com/keys)

## Usage

```typescript
import { findValidCoupon } from 'boundless-toolkit/stripe';
const coupon = await findValidCoupon('coupon-code');
```