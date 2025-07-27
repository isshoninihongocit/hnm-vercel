// "use client";
//
// import React from "react";
// import CartDashboard from "~/components/CartDashboard";
// const plans = [
//   {
//     name: "General",
//     days: {
//       Day1: [
//         "Canvas Painting – Strokes of HnM",
//         "Akihabara no Quest - A Japanese X Anime quiz",
//         "O-Talku Zone! - Talk and Interact Area",
//         "Hanetsuki",
//         "Obstacle Course – Nihon Ninja Run",
//       ],
//       Day2: [
//         "Canvas Painting – Strokes of HnM",
//         "Akihabara no Quest - A Japanese X Anime quiz",
//         "O-Talku Zone! - Talk and Interact Area",
//         "Obstacle Course – Nihon Ninja Run",
//         "Musical Performance – Notes of Nippon",
//         "Artist Alley",
//       ],
//     },
//   },
//   {
//     name: "Premium",
//     days: {
//       Day1: [
//         "Watch Party",
//         "Japanese Language and Culture Workshop",
//         "Origami Workshop",
//       ],
//       Day2: [
//         "Otaku Onstage! A Cosplay Carnival",
//         "Digital Art Workshop",
//         "Kendo Workshop",
//       ],
//     },
//   },
// ];
//
// const workshops = [
//   "Japanese Calligraphy Workshop",
//   "Origami Advanced Session",
//   "Ikebana - Japanese Flower Arrangement",
//   "Tea Ceremony Experience",
//   "Manga Drawing Basics",
//   "Kendo Masterclass",
// ];
//
// export default function RegistrationPage() {
//   return (
//     <div className="bg-black text-white min-h-screen py-16 px-8">
//       <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center">
//         REGISTRATION
//       </h1>
//
//       {/* PLANS & DAYS */}
//       <div className="grid grid-cols-3 gap-4 text-center text-lg uppercase font-bold">
//         <div className="bg-red-700 py-4">PLAN</div>
//         <div className="bg-red-700 py-4">DAY 1</div>
//         <div className="bg-red-700 py-4">DAY 2</div>
//
//         {plans.map((plan) => (
//           <React.Fragment key={plan.name}>
//             {/* PLAN */}
//             <div className="bg-gradient-to-b from-purple-800 to-blue-800 flex items-center justify-center py-12 text-2xl">
//               {plan.name}
//             </div>
//
//             {/* DAY 1 */}
//             <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//               {plan.days.Day1.map((event, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//                 >
//                   {event}
//                 </div>
//               ))}
//             </div>
//
//             {/* DAY 2 */}
//             <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//               {plan.days.Day2.map((event, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//                 >
//                   {event}
//                 </div>
//               ))}
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//       {/* WORKSHOPS SECTION */}
//       <div className="mt-20">
//         <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">
//           WORKSHOPS
//         </h2>
//
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {workshops.map((ws, idx) => (
//             <div
//               key={idx}
//               className="border border-green-500 text-center py-6 px-4 rounded-xl text-lg font-semibold hover:bg-green-500 hover:text-black transition"
//             >
//               {ws}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-20">
//         <CartDashboard />
//       </div>
//     </div>
//   );
// }

// "use client";
//
// import React from "react";
// import CartDashboard from "~/components/CartDashboard";
//
// const plans = [
//   {
//     name: "General",
//     days: {
//       Day1: [
//         "Canvas Painting – Strokes of HnM",
//         "Akihabara no Quest - A Japanese X Anime quiz",
//         "O-Talku Zone! - Talk and Interact Area",
//         "Hanetsuki",
//         "Obstacle Course – Nihon Ninja Run",
//       ],
//       Day2: [
//         "Canvas Painting – Strokes of HnM",
//         "Akihabara no Quest - A Japanese X Anime quiz",
//         "O-Talku Zone! - Talk and Interact Area",
//         "Obstacle Course – Nihon Ninja Run",
//         "Musical Performance – Notes of Nippon",
//         "Artist Alley",
//       ],
//     },
//   },
//   {
//     name: "Premium",
//     days: {
//       Day1: [
//         "Watch Party",
//         "Japanese Language and Culture Workshop",
//         "Origami Workshop",
//       ],
//       Day2: [
//         "Otaku Onstage! A Cosplay Carnival",
//         "Digital Art Workshop",
//         "Kendo Workshop",
//       ],
//     },
//   },
// ];
// const workshops = [
//   "Japanese Calligraphy Workshop",
//   "Origami Advanced Session",
//   "Ikebana - Japanese Flower Arrangement",
//   "Tea Ceremony Experience",
//   "Manga Drawing Basics",
//   "Kendo Masterclass",
// ];
// export default function RegistrationPage() {
//   const handlePayment = (amount: number, plan: string) => {
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // ✅ your public key
//       amount: amount * 100, // ₹ -> paise
//       currency: "INR",
//       name: "Hikari no Matsuri",
//       description: `${plan} Registration`,
//       handler: function (response: any) {
//         alert(
//           `Payment successful! Payment ID: ${response.razorpay_payment_id}`
//         );
//       },
//       prefill: {
//         name: "Aksshay",
//         email: "aksshay@example.com",
//         contact: "9876543210",
//       },
//       theme: { color: "#F37254" },
//     };
//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//   };
//   return (
//     <div className="bg-black text-white min-h-screen py-16 px-8">
//       <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center">
//         REGISTRATION
//       </h1>
//       <div className="grid grid-cols-3 gap-4 text-center text-lg uppercase font-bold">
//         <div className="bg-red-700 py-4">PLAN</div>
//         <div className="bg-red-700 py-4">DAY 1</div>
//         <div className="bg-red-700 py-4">DAY 2</div>
//
//         {plans.map((plan) => (
//           <React.Fragment key={plan.name}>
//             <div className="bg-gradient-to-b from-purple-800 to-blue-800 flex flex-col items-center justify-center py-12 text-2xl">
//               <span>{plan.name}</span>
//               <button
//                 onClick={() =>
//                   handlePayment(plan.name === "General" ? 100 : 200, plan.name)
//                 }
//                 className="mt-4 bg-red-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-red-700 transition"
//               >
//                 Pay ₹{plan.name === "General" ? 100 : 200}
//               </button>
//             </div>
//             <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//               {plan.days.Day1.map((event, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//                 >
//                   {event}
//                 </div>
//               ))}
//             </div>
//             <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//               {plan.days.Day2.map((event, idx) => (
//                 <div
//                   key={idx}
//                   className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//                 >
//                   {event}
//                 </div>
//               ))}
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//       <div className="mt-20">
//         <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">
//           WORKSHOPS
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {workshops.map((ws, idx) => (
//             <div
//               key={idx}
//               className="border border-green-500 text-center py-6 px-4 rounded-xl text-lg font-semibold hover:bg-green-500 hover:text-black transition flex flex-col items-center"
//             >
//               <span>{ws}</span>
//               <button
//                 onClick={() => handlePayment(300, ws)}
//                 className="mt-4 bg-green-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-green-700 transition"
//               >
//                 Pay ₹300
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-20">
//         <CartDashboard />
//       </div>
//     </div>
//   );
// }

// Main code where the razorpay window works and everyone needs to do this one
"use client";
import React from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CartDashboard from "~/components/CartDashboard";

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
//image for the plan 1 and plan 2 registration
// "use client";
//
// import React, { useState } from "react";
// import { auth } from "~/utils/firebase";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import generalImg from "/gen.jpg";
// import premiumImg from "/pre.jpg";
// import workshopImg from "/workshop.jpg";
// const generalDay1 = [
//   "Canvas Painting – Strokes of HnM",
//   "Akihabara no Quest - A Japanese X Anime quiz",
//   "O-Talku Zone! - Talk and Interact Area",
//   "Hanetsuki",
//   "Obstacle Course – Nihon Ninja Run",
// ];
//
// const generalDay2 = [
//   "Canvas Painting – Strokes of HnM",
//   "Akihabara no Quest - A Japanese X Anime quiz",
//   "O-Talku Zone! - Talk and Interact Area",
//   "Obstacle Course – Nihon Ninja Run",
//   "Musical Performance – Notes of Nippon",
//   "Artist Alley",
// ];
//
// const premiumDay1 = [
//   "Watch Party",
//   "Japanese Language and Culture Workshop",
//   "Origami Workshop",
// ];
//
// const premiumDay2 = [
//   "Otaku Onstage! A Cosplay Carnival",
//   "Digital Art Workshop",
//   "Kendo Workshop",
// ];
//
// const workshops = [
//   "Japanese Calligraphy Workshop",
//   "Origami Advanced Session",
//   "Ikebana - Japanese Flower Arrangement",
//   "Tea Ceremony Experience",
//   "Manga Drawing Basics",
//   "Kendo Masterclass",
// ];
//
// export default function RegistrationPage() {
//   const db = getFirestore();
//   const [isPaying, setIsPaying] = useState(false);
//
//   const handlePayment = async (amount: number, plan: string) => {
//     const user = auth.currentUser;
//
//     if (!user) {
//       alert("Please login with Google to continue.");
//       return;
//     }
//
//     const isLoaded = await loadRazorpay();
//     if (!isLoaded) {
//       alert("Failed to load Razorpay SDK");
//       return;
//     }
//
//     setIsPaying(true);
//
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
//       amount: amount * 100,
//       currency: "INR",
//       name: "Hikari no Matsuri",
//       description: `${plan} Registration`,
//       handler: async function (response: any) {
//         const code = Math.floor(1000 + Math.random() * 9000);
//         await addDoc(collection(db, "registrations"), {
//           uid: user.uid,
//           name: user.displayName,
//           email: user.email,
//           plan: plan,
//           amountPaid: amount,
//           paymentId: response.razorpay_payment_id,
//           registrationCode: code,
//           timestamp: new Date().toISOString(),
//         });
//         alert(
//           `Payment successful! You are registered for ${plan}. Your code: ${code}`
//         );
//       },
//       prefill: {
//         name: user.displayName || "",
//         email: user.email || "",
//       },
//       theme: { color: "#F37254" },
//     };
//     const rzp = new (window as any).Razorpay(options);
//     rzp.open();
//     setIsPaying(false);
//   };
//   return (
//     <div className="bg-black text-white min-h-screen py-16 px-8">
//       <h1 className="text-4xl md:text-6xl font-extrabold mb-12 text-center">
//         REGISTRATION
//       </h1>
//       <div className="grid grid-cols-3 gap-4 text-center text-lg uppercase font-bold">
//         <div className="bg-red-700 py-4">PLAN</div>
//         <div className="bg-red-700 py-4">DAY 1</div>
//         <div className="bg-red-700 py-4">DAY 2</div>
//         <div className="bg-gradient-to-b from-purple-800 to-blue-800 flex flex-col justify-center items-center p-4">
//           <div className="w-full aspect-square mb-4">
//             <img
//               src={generalImg}
//               alt="General"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mb-2">GENERAL</h2>
//           <button
//             onClick={() => handlePayment(100, "General")}
//             disabled={isPaying}
//             className="bg-red-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-red-700 transition"
//           >
//             Pay ₹100
//           </button>
//         </div>
//         <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//           {generalDay1.map((event, idx) => (
//             <div
//               key={idx}
//               className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//             >
//               {event}
//             </div>
//           ))}
//         </div>
//         <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//           {generalDay2.map((event, idx) => (
//             <div
//               key={idx}
//               className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//             >
//               {event}
//             </div>
//           ))}
//         </div>
//         <div className="bg-gradient-to-b from-purple-800 to-blue-800 flex flex-col justify-center items-center p-4">
//           <div className="w-full aspect-square mb-4">
//             <img
//               src={premiumImg}
//               alt="Premium"
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           <h2 className="text-xl font-bold mb-2">PREMIUM</h2>
//           <button
//             onClick={() => handlePayment(200, "Premium")}
//             disabled={isPaying}
//             className="bg-red-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-red-700 transition"
//           >
//             Pay ₹200
//           </button>
//         </div>
//
//         <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//           {premiumDay1.map((event, idx) => (
//             <div
//               key={idx}
//               className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//             >
//               {event}
//             </div>
//           ))}
//         </div>
//         <div className="bg-neutral-900 p-4 flex flex-col gap-4">
//           {premiumDay2.map((event, idx) => (
//             <div
//               key={idx}
//               className="border border-yellow-500 py-4 px-2 rounded text-base hover:bg-yellow-600 hover:text-black transition"
//             >
//               {event}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="mt-20">
//         <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">
//           WORKSHOPS
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {workshops.map((w, idx) => (
//             <div
//               key={idx}
//               className="border border-green-500 text-center py-6 px-4 rounded-xl flex flex-col items-center"
//             >
//               <div className="w-full aspect-square mb-4">
//                 <img
//                   src={workshopImg}
//                   alt={w}
//                   className="w-full h-full object-cover rounded-lg"
//                 />
//               </div>
//               <span className="text-lg font-semibold mb-2">{w}</span>
//               <button
//                 onClick={() => handlePayment(300, w)}
//                 disabled={isPaying}
//                 className="bg-green-600 px-4 py-2 rounded-full text-sm uppercase hover:bg-green-700 transition"
//               >
//                 Pay ₹300
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
//
// async function loadRazorpay() {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// }
