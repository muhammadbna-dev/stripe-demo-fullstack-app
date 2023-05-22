import Stripe from "stripe";
import * as dotenv from "dotenv";

dotenv.config();

const initializeStripeSdk = (): Stripe => {
  const stripeTestSecretKey = process.env["STRIPE_TEST_SECRET_KEY"];
  if (!stripeTestSecretKey) {
    throw new Error("Stripe secret key is not configured in env");
  }
  return new Stripe(stripeTestSecretKey, {
    apiVersion: "2022-11-15",
  });
};

const createStripeSubscription = async (): Promise<{
  productId: string;
  priceId: string;
}> => {
  const stripe: Stripe = initializeStripeSdk();

  let product: Stripe.Product | null = null;
  try {
    product = await stripe.products.create({
      name: "Starter Subscription",
      description: "$12/Month subscription",
    });
  } catch (err) {
    throw new Error(`Error creating new Stripe product: ${err}`);
  }

  if (!product) {
    throw new Error("Stripe SDK returned a null product");
  }

  let price: Stripe.Price | null = null;
  try {
    price = await stripe.prices.create({
      unit_amount: 1200,
      currency: "usd",
      recurring: {
        interval: "month",
      },
      product: product.id,
    });
  } catch (err) {
    throw new Error(
      `Error creating new price option for Product ID (${product.id}): ${err}`
    );
  }

  if (!price) {
    throw new Error("Stripe SDK returned a null price");
  }

  return {
    productId: product.id,
    priceId: price.id,
  };
};

export { createStripeSubscription };
