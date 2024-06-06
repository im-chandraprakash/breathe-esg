
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBfBjemkZV4QyLyW-7QzXlMHzWHUOeB_DA",
    authDomain: "my-project-44cc0.firebaseapp.com",
    projectId: "my-project-44cc0",
    storageBucket: "my-project-44cc0.appspot.com",
    messagingSenderId: "192893046704",
    appId: "1:192893046704:web:5ad15196549e87828d9075",
    measurementId: "G-P86DTY32Y3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// // src/firebaseConfig.ts
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);

