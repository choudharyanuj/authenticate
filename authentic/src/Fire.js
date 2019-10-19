import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDG5XsRVJzCl0wcJFEOk7IJFhA1M4CxkJA",
    authDomain: "rakht-16-10-2019.firebaseapp.com",
    databaseURL: "https://rakht-16-10-2019.firebaseio.com",
    projectId: "rakht-16-10-2019",
    storageBucket: "rakht-16-10-2019.appspot.com",
    messagingSenderId: "256552253112",
    appId: "1:256552253112:web:6d6d991841265f9c84a64d",
    measurementId: "G-JJ6PVFTT76"
  };
const fire = firebase.initializeApp(firebaseConfig);
export default fire;