import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAyqIO6MviBtDQJYUT-y1fsaDJvwfmKRdQ",
  authDomain: "auth-explorer.firebaseapp.com",
  projectId: "auth-explorer",
  storageBucket: "auth-explorer.appspot.com",
  messagingSenderId: "561885033297",
  appId: "1:561885033297:web:f054f369fd68211e959970"
};

const app = initializeApp(firebaseConfig);
console.log(app);