// app/routes/api.createOrder.ts
import { json } from "@remix-run/node";
import Razorpay from "razorpay";

export const loader = async () => {
  return json({ error: "POST only" }, { status: 405 });
};

export const action = async ({ request }: { request: Request }) => {
  const body = await request.json();
  const { amount } = body;

  if (!amount) {
    return json({ error: "Amount required" }, { status: 400 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    return json(order);
  } catch (err) {
    console.error(err);
    return json({ error: "Failed to create order" }, { status: 500 });
  }
};
