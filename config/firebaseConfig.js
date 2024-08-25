import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FREBASE_API_KEY,
  authDomain: "loop-a6bdc.firebaseapp.com",
  projectId: "loop-a6bdc",
  storageBucket: "loop-a6bdc.appspot.com",
  messagingSenderId: "691761508416",
  appId: "1:691761508416:web:48e76d2382c465d8bc6fa5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Check if the code is running in a browser before initializing analytics
if (typeof window !== "undefined") {
  // Import getAnalytics conditionally
  import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
    isSupported().then((supported) => {
      if (supported) {
        getAnalytics(app);
      }
    });
  });
}
