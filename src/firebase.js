import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB4WBETwaK2w1QKtMDEJtU0CdgownVMzYQ",
  authDomain: "simpledo-3abc1.firebaseapp.com",
  databaseURL: "https://simpledo-3abc1.firebaseio.com",
  projectId: "simpledo-3abc1",
  storageBucket: "simpledo-3abc1.appspot.com",
  messagingSenderId: "394025633086",
  appId: "1:394025633086:web:06ae2ba9f0c5c9964d586f"
});

export { firebaseConfig as firebase };