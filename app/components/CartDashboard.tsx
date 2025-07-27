"use client";

import React, { useState } from "react";
import { auth } from "~/utils/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function CartDashboard() {
  const [selectedPlan, setSelectedPlan] = useState<
    "General" | "Premium" | null
  >(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false);

  const db = getFirestore();

  const handlePay = async () => {
    if (!selectedPlan && !selectedWorkshop) {
      alert("Please select a plan or workshop.");
      return;
    }

    const amount =
      selectedPlan === "General"
        ? 100
        : selectedPlan === "Premium"
        ? 200
        : selectedWorkshop
        ? 300
        : 0;

    const res = await loadRazorpay();
    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      alert("Please login first!");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_XpasasasasasUu",
      amount: amount * 100,
      currency: "INR",
      name: "Hikari no Matsuri",
      description: `Registration for ${selectedPlan || selectedWorkshop}`,
      handler: async function (response: any) {
        await addDoc(collection(db, "registrations"), {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          plan: selectedPlan,
          workshop: selectedWorkshop,
          amountPaid: amount,
          paymentId: response.razorpay_payment_id,
          createdAt: new Date().toISOString(),
        });

        alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: user.displayName || "",
        email: user.email || "",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-2xl mb-4">Cart & Checkout</h2>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            setSelectedPlan("General");
            setSelectedWorkshop(null);
          }}
          className={`border px-4 py-2 ${
            selectedPlan === "General" ? "bg-green-600" : ""
          }`}
        >
          General Pass ₹100
        </button>
        <button
          onClick={() => {
            setSelectedPlan("Premium");
            setSelectedWorkshop(null);
          }}
          className={`border px-4 py-2 ${
            selectedPlan === "Premium" ? "bg-green-600" : ""
          }`}
        >
          Premium Pass ₹200
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-xl mb-2">Or select a workshop:</h3>
        {["Workshop A", "Workshop B", "Workshop C"].map((ws) => (
          <button
            key={ws}
            onClick={() => {
              setSelectedWorkshop(ws);
              setSelectedPlan(null);
            }}
            className={`border px-4 py-2 mr-2 ${
              selectedWorkshop === ws ? "bg-green-600" : ""
            }`}
          >
            {ws} ₹300
          </button>
        ))}
      </div>
      <button
        onClick={handlePay}
        className="bg-red-600 px-6 py-3 rounded text-lg"
      >
        Pay & Register
      </button>
    </div>
  );
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

async function loadRazorpay() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
