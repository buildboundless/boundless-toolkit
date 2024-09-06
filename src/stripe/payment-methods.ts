import { stripe } from "./lib";
import { getSetupIntent } from "./setup-intents";
import { PaymentMethod, PaymentMethodParams } from "./types";

export async function addPaymentMethod(params: PaymentMethodParams) {
  // get setup intent
  const setupIntent = await getSetupIntent(params.setupIntentId);

  // add payment method and make default
  const currentPaymentMethodId = setupIntent.payment_method as string;
  await stripe.paymentMethods.attach(currentPaymentMethodId, {
    customer: params.customerId,
  });
  await stripe.customers.update(params.customerId, {
    invoice_settings: {
      default_payment_method: currentPaymentMethodId,
    },
  });

  // delete old payment methods
  const paymentMethodList = await stripe.paymentMethods.list({
    customer: params.customerId,
    type: "card",
  });
  await Promise.all(
    paymentMethodList.data.map(async (oldPaymentMethod) => {
      if (oldPaymentMethod.id !== currentPaymentMethodId) {
        await stripe.paymentMethods.detach(oldPaymentMethod.id);
      }
    })
  );
}

export async function getPaymentMethod(
  customerId: string
): Promise<PaymentMethod | null> {
  const customer = await stripe.customers.retrieve(customerId);
  if (customer.deleted) return null;

  const paymentMethodId =
    customer.invoice_settings.default_payment_method?.toString();
  if (!paymentMethodId) return null;

  const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);

  return {
    id: paymentMethod.id,
    card: {
      brand: paymentMethod.card?.brand || "",
      last4: paymentMethod.card?.last4 || "",
    },
  };
}
