// Main code where the razorpay window works and everyone needs to do this one
"use client";
import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = () => {
  return json({
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  });
};

const plans = [
  {
    name: "General",
    price: 100,
    days: {
      Day1: [
        "Canvas Painting – Strokes of HnM",
        "Akihabara no Quest - A Japanese X Anime quiz",
        "O-Talku Zone! - Talk and Interact Area",
        "Hanetsuki",
        "Obstacle Course – Nihon Ninja Run",
      ],
      Day2: [
        "Canvas Painting – Strokes of HnM",
        "Akihabara no Quest - A Japanese X Anime quiz",
        "O-Talku Zone! - Talk and Interact Area",
        "Obstacle Course – Nihon Ninja Run",
        "Musical Performance – Notes of Nippon",
        "Artist Alley",
      ],
    },
  },
  {
    name: "Premium",
    price: 200,
    days: {
      Day1: [
        "Watch Party",
        "Japanese Language and Culture Workshop",
        "Origami Workshop",
      ],
      Day2: [
        "Otaku Onstage! A Cosplay Carnival",
        "Digital Art Workshop",
        "Kendo Workshop",
      ],
    },
  },
];
const workshops = [
  { name: "Japanese Calligraphy Workshop", price: 300 },
  { name: "Origami Advanced Session", price: 300 },
  { name: "Ikebana - Japanese Flower Arrangement", price: 300 },
  { name: "Tea Ceremony Experience", price: 300 },
  { name: "Manga Drawing Basics", price: 300 },
  { name: "Kendo Masterclass", price: 300 },
];
export default function RegistrationPage() {
  const { RAZORPAY_KEY_ID } = useLoaderData<typeof loader>();
  const handlePayment = async (amount: number, description: string) => {
    await loadRazorpayScript();
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amount * 100,
      currency: "INR",
      name: "Hikari no Matsuri",
      description,
      handler: function (response: any) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
      },
      prefill: {
        name: "Aksshay",
        email: "aksshay@example.com",
      },
      theme: { color: "#F37254" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-8">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center">
        REGISTRATION
      </h1>
      <div className="grid grid-cols-3 gap-4 text-center text-lg uppercase font-bold">
        <div className="bg-red-700 py-4">PLAN</div>
        <div className="bg-red-700 py-4">DAY 1</div>
        <div className="bg-red-700 py-4">DAY 2</div>
        {plans.map((plan) => (
          <React.Fragment key={plan.name}>
            <div className="bg-gradient-to-b from-purple-800 to-blue-800 flex flex-col items-center justify-center py-12 text-2xl">
              <span>{plan.name}</span>
              <button
                onClick={() => handlePayment(plan.price, `${plan.name} Pass`)}
                className="mt-4 bg-red-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-red-700 transition"
              >
                Pay ₹{plan.price}
              </button>
            </div>

            <div className="bg-neutral-900 p-4 flex flex-col gap-4">
              {plan.days.Day1.map((event) => (
                <div
                  key={event}
                  className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
                >
                  {event}
                </div>
              ))}
            </div>
            <div className="bg-neutral-900 p-4 flex flex-col gap-4">
              {plan.days.Day2.map((event) => (
                <div
                  key={event}
                  className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
                >
                  {event}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="mt-20">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">
          WORKSHOPS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((ws) => (
            <div
              key={ws.name}
              className="border border-green-500 text-center py-6 px-4 rounded-xl text-lg font-semibold hover:bg-green-500 hover:text-black transition flex flex-col items-center"
            >
              <span>{ws.name}</span>
              <button
                onClick={() => handlePayment(ws.price, ws.name)}
                className="mt-4 bg-green-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-green-700 transition"
              >
                Pay ₹{ws.price}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function loadRazorpayScript() {
  if (document.getElementById("razorpay-sdk")) return;
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "razorpay-sdk";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
