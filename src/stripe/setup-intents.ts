import { stripe } from "./lib";
import { StripeSetupIntent } from "./types";

export async function createSetupIntent(): Promise<StripeSetupIntent> {
  return await stripe.setupIntents.create({
    payment_method_types: ["card"],
  });
}

export async function getSetupIntent(
  setupIntentId: string
): Promise<StripeSetupIntent> {
  return await stripe.setupIntents.retrieve(setupIntentId);
}
