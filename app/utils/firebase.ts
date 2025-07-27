// // firebase.ts
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
//
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };
//
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBQwtwUC3zeHoqHpURw26snXZfzd4mQ4rM",
//   authDomain: "hnm2-ee706.firebaseapp.com",
//   projectId: "hnm2-ee706",
//   storageBucket: "hnm2-ee706.firebasestorage.app",
//   messagingSenderId: "675958679243",
//   appId: "1:675958679243:web:de3efcebe620ab2fa01d4e",
//   measurementId: "G-5TTMGHQPEY",
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// app/utils/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBQwtwUC3zeHoqHpURw26snXZfzd4mQ4rM",
  authDomain: "hnm2-ee706.firebaseapp.com",
  projectId: "hnm2-ee706",
  storageBucket: "hnm2-ee706.firebasestorage.app",
  messagingSenderId: "675958679243",
  appId: "1:675958679243:web:de3efcebe620ab2fa01d4e",
  measurementId: "G-5TTMGHQPEY",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
