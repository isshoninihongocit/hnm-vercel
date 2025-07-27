// import { cn } from "../lib/utils";
// export default function BackgroundPattern() {
//   return (
//     <div
//       className={cn(
//         "fixed inset-0 -z-10",
//         "[background-size:20px_20px]",
//         "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
//         "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
//       )}
//     >
//       <div className="absolute inset-0 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//     </div>
//   );
// }

import { cn } from "../lib/utils";

// export default function BackgroundPattern() {
//   return (
//     <div
//       className={cn(
//         "fixed inset-0 -z-10",
//         "bg-black",
//         "[background-size:20px_20px]",
//         "[background-image:radial-gradient(white_1px,transparent_1px)]" // white dots on black bg
//       )}
//     >
//       <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//     </div>
//   );
// }

export default function BackgroundPattern() {
  return <div className="fixed inset-0 -z-10 bg-black" />;
}
