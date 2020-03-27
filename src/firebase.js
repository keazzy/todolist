import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.intializeApp({
    apiKey: "AIzaSyDkT7cdkmDIDqrB38zY1COvLnDZsqbqxx8",
    authDomain: "todolist-as.firebaseapp.com",
    databaseURL: "https://todolist-as.firebaseio.com",
    projectId: "todolist-as",
    storageBucket: "todolist-as.appspot.com",
    messagingSenderId: "906935876357",
    appId: "1:906935876357:web:109d0b060b33a6ca62d56c"
});

export { firebaseConfig as firebase };