import { stripe } from "./lib";
import { StripePrice } from "./types";

export async function getPrice(priceId: string): Promise<StripePrice> {
  return await stripe.prices.retrieve(priceId);
}
