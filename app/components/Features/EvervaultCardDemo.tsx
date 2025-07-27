"use client";
import { EvervaultCard, Icon } from "../ui/evervault-card";
import { FaLock } from "react-icons/fa6";

export function EvervaultCardDemo() {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="flex flex-col lg:flex-row-reverse items-center justify-between w-full 
     space-y-16 lg:space-y-0 px-8 sm:px-20 md:px-8 py-12 md:text-left text-center"
    >
      {/* Left Side Text */}
      <div className="flex flex-col items-center sm:items-start lg:justify-center justify-between lg:w-[50%] ml-4">
        <div className="text-3xl lg:text-5xl font-semibold inline-flex items-center space-x-3">
          <h1 className="bg-gradient-to-r from-[#ff1e1e] to-[#ff7b3c] text-transparent bg-clip-text">
            プライバシーを大切に
          </h1>
          <FaLock className="text-red-600" size={40} />
        </div>
        <p className="text-white dark:text-neutral-100 text-md md:text-lg lg:text-xl mt-8 max-w-xl text-justify font-hnm">
          At <span className="font-bold">光の祭り (Hikari no Matsuri)</span>,
          your trust is our greatest honor. We protect every participant’s
          personal information with the utmost care, following strict security
          practices inspired by the Japanese values of
          <span className="font-semibold text-[#dc2626]"> 誠 (Makoto)</span> —
          sincerity and
          <span className="font-semibold text-[#dc2626]">
            {" "}
            信頼 (Shinrai)
          </span>{" "}
          — trust. Your data remains confidential and secure, allowing you to
          celebrate freely, connect deeply, and experience the festival with
          complete peace of mind.
        </p>
        <a
          href="/privacy"
          className="mt-4 font-hnm text-l border border-red-700 dark:border-red-600 rounded-full px-3 py-1 text-red-700 dark:text-red-500 hover:bg-red-700 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition"
        >
          詳しく読む (Read More)
        </a>
      </div>

      {/* Right Side Card */}
      <div className="border border-red-700 dark:border-red-700/[0.4] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-red-700 dark:text-red-700" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-red-700 dark:text-red-700" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-red-700 dark:text-red-700" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-red-700 dark:text-red-700" />
        <EvervaultCard text="Identity" />
        <h2 className="dark:text-white text-l text-white mt-4 text-sm font-hnm">
          Your entire identity is protected and encrypted (Hover)
        </h2>
        <a
          href="/privacy"
          className="text-l border font-hnm border-red-800/[0.8] dark:border-red-800/[0.7] rounded-full mt-4 text-white dark:text-white px-2 py-0.5"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default EvervaultCardDemo;
