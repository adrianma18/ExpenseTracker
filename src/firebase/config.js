import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCigvqbENl50mvtxpY0kHTdFpOJTfosFW0",
  authDomain: "mymoney-69c28.firebaseapp.com",
  projectId: "mymoney-69c28",
  storageBucket: "mymoney-69c28.appspot.com",
  messagingSenderId: "47254270273",
  appId: "1:47254270273:web:502e693107b40a616031c0",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
