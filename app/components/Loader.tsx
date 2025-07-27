// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function Loader() {
//   const [step, setStep] = useState<1 | 2 | 3>(1);

//   useEffect(() => {
//     // Step 1 lasts 1 second, then step 2 starts
//     const timer1 = setTimeout(() => setStep(2), 1000);

//     // Step 2 lasts 2 seconds, then exit loader
//     const timer2 = setTimeout(() => setStep(3), 3000);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {step !== 3 && (
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black"
//         >
//           {step === 1 && (
//             <motion.img
//               src="/load.png"
//               alt="Intro Image"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-148 md:w-164"
//             />
//           )}

//           {step === 2 && (
//             <motion.h1
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               className="text-white text-3xl md:text-5xl font-bold"
//             >
//             HIKARI NO MATSURI
//             </motion.h1>
//           )}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(2), 1000);
    const timer2 = setTimeout(() => {
      setStep(3);
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {step !== 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {step === 1 && (
            <motion.img
              src="/load.png"
              alt="Intro Image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-148 md:w-164"
            />
          )}

          {step === 2 && (
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-white text-3xl md:text-5xl font-bold"
            >
              HIKARI NO MATSURI
            </motion.h1>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
