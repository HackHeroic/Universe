
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRSRNrkCWMCBzF_F-TR2xivHvSVBrLbBQ",
  authDomain: "universe-database.firebaseapp.com",
  projectId: "universe-database",
  storageBucket: "universe-database.appspot.com",
  messagingSenderId: "803432082314",
  appId: "1:803432082314:web:28e847836ab58112cc7673",
  measurementId: "G-4VHSM93S7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);