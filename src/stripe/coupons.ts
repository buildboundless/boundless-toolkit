import { stripe } from "./lib";
import { StripeCoupon } from "./types";

export async function findValidCoupon(
  input: string
): Promise<StripeCoupon | null> {
  try {
    // find by id
    const byId = await findValidCouponById(input);
    if (byId) {
      return byId;
    }
    // find by promo code
    const byPromoCode = await findValidCouponByCode(input);
    if (byPromoCode) {
      return byPromoCode;
    }
    throw new Error("Valid coupon not found");
  } catch (error: any) {
    console.error("Error retrieving coupons:", error);
  }
  return null;
}

export async function findValidCouponById(
  couponId: string
): Promise<StripeCoupon | null> {
  const coupon = await stripe.coupons.retrieve(couponId);
  if (coupon.valid) {
    return {
      id: coupon!.id,
      name: coupon.name ?? undefined,
      amount_off: coupon.amount_off ?? undefined,
      percent_off: coupon!.percent_off ?? undefined,
    };
  }
  return null;
}

export async function findValidCouponByCode(
  code: string
): Promise<StripeCoupon | null> {
  try {
    // uses stripe auto pagination (https://stripe.com/docs/api/pagination/auto)
    for await (const promo of stripe.promotionCodes.list({
      code: code,
      active: true,
    })) {
      const coupon = await findValidCouponById(promo.coupon.id);
      if (coupon) {
        return {
          id: coupon.id,
          name: coupon.name ?? undefined,
          amount_off: coupon.amount_off ?? undefined,
          percent_off: coupon.percent_off ?? undefined,
        };
      }
    }
  } catch (error: any) {
    console.warn("Could not find valid coupon by promo code:", error);
  }
  return null;
}
