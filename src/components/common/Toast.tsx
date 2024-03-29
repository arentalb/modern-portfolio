// import { ReactNode } from "react";
//
// interface ToastProps {
//   children: ReactNode;
//   toggleHandler: () => void;
// }
//
// function Toast({ children, toggleHandler }: ToastProps) {
//   return (
//     <>
//       <div className="fixed bottom-0 right-0 z-[200] mb-4 mr-4 rounded bg-white px-4 py-2 text-black shadow-lg">
//         <div className="flex items-center justify-between">
//           <div>{children}</div>
//           <button
//             onClick={() => toggleHandler()}
//             className="ml-2 focus:outline-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-black"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
