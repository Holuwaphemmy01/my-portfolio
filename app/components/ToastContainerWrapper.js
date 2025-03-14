// "use client"; // Mark this component as a Client Component

// import dynamic from "next/dynamic";

// // Dynamically import ToastContainer to ensure it only runs on the client side
// const ToastContainer = dynamic(
//   () => import("react-toastify").then((mod) => mod.ToastContainer),
//   { ssr: false }
// );

// export default function ToastContainerWrapper() {
//   return <ToastContainer />;
// }

"use client"; // Mark this component as a Client Component

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import ToastContainer to ensure it only runs on the client side
const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);

export default function ToastContainerWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true after the component mounts
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return <ToastContainer />;
}