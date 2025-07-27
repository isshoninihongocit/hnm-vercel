"use client";
import React from "react";
import { useAuth } from "../utils/useAuth";
import { useNavigate } from "@remix-run/react";

export default function MyMatsuriDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Retrieve registration info from localStorage
  let registration;
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("matsuri_registration");
    registration = data ? JSON.parse(data) : null;
  }

  if (!user)
    return (
      <div className="flex items-center justify-center h-[75vh]">
        <div className="bg-white p-12 rounded shadow-lg text-center">
          <p className="text-lg font-semibold">
            Please login to view your dashboard.
          </p>
          <button
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold"
            onClick={() => navigate("/registration")}
          >
            Go to Registration
          </button>
        </div>
      </div>
    );

  if (!registration)
    return (
      <div className="flex items-center justify-center h-[75vh]">
        <div className="bg-white p-12 rounded shadow-lg text-center">
          <h2 className="text-2xl mb-3">No Registration Found</h2>
          <p className="text-gray-600 mb-4">
            Please register for events to see your dashboard!
          </p>
          <button
            onClick={() => navigate("/registration")}
            className="px-6 py-2 bg-red-600 text-white rounded-full font-semibold"
          >
            Register Now
          </button>
        </div>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">🎟️ My Matsuri Dashboard</h1>
        <div className="text-lg mb-3 font-medium text-red-700">
          {registration.name}
        </div>
        <div className="text-md mb-2">
          Email: <span className="text-gray-800">{registration.email}</span>
        </div>
        <div className="mb-3">
          <div className="text-sm text-gray-600 mb-1">
            Entry Code / Ticket ID:
          </div>
          <div className="bg-yellow-100 px-6 py-2 rounded-lg font-mono text-xl text-red-600 tracking-widest">
            {registration.userId}
          </div>
        </div>
        <div className="mt-6 w-full">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">
            Registered For:
          </h2>
          <ul className="list-disc ml-6 text-lg text-gray-800">
            {registration.events.map((e: any) => (
              <li key={e.id}>{e.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between w-full mt-8 font-bold text-lg">
          <span>Total Paid:</span>
          <span>₹ {registration.total}</span>
        </div>
        <div className="mt-8 w-full flex flex-col md:flex-row gap-3 justify-between">
          <button
            className="bg-gray-300 rounded-full px-6 py-2 font-semibold text-gray-700 hover:bg-gray-400"
            onClick={logout}
          >
            Logout
          </button>
          <button
            className="bg-red-600 rounded-full px-6 py-2 font-semibold text-white hover:bg-red-700"
            onClick={() => navigate("/registration")}
          >
            Register More Events
          </button>
        </div>
      </div>
    </div>
  );
}
