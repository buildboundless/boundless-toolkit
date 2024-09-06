import Stripe from "stripe";

export interface StripeSetupIntent extends Stripe.SetupIntent {}

export interface StripeCustomerCreateParams {
  name: string;
  email: string;
}

export type PaymentMethodParams = {
  customerId: string;
  setupIntentId: string;
};

export interface StripeCustomer extends Stripe.Customer {}

export interface StripePrice {
  id: string;
  currency: string;
  unit_amount: number | null;
}

export interface PaymentMethod {
  id: string;
  card: {
    brand: string;
    last4: string;
  };
}

export interface StripeCoupon {
  id: string;
  name?: string;
  amount_off?: number;
  percent_off?: number;
}
