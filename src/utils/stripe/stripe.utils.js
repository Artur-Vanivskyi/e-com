import { loadStripe } from "@stripe/stripe-js";

//here we gonna use publishable key
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
