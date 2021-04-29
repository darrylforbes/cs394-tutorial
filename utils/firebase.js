import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAafdw0RhUTXu_CLeerbD2H_EGeBuJ0mnI",
  authDomain: "scheduler-cba67.firebaseapp.com",
  databaseURL: "https://scheduler-cba67-default-rtdb.firebaseio.com",
  projectId: "scheduler-cba67",
  storageBucket: "scheduler-cba67.appspot.com",
  messagingSenderId: "20674910557",
  appId: "1:20674910557:web:f5e1a90d6e26d66c43b0b4"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
