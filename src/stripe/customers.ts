import { stripe } from "./lib";
import { StripeCustomer, StripeCustomerCreateParams } from "./types";

export async function createCustomer(
  params: StripeCustomerCreateParams
): Promise<StripeCustomer> {
  return await stripe.customers.create({
    name: params.name,
    email: params.email,
  });
}

export async function getCustomer(customerId: string): Promise<StripeCustomer> {
  const customer = await stripe.customers.retrieve(customerId);
  if (customer.deleted) throw new Error("Customer not found");
  return customer;
}
