import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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
const analytics = getAnalytics(app);
