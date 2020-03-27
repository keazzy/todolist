import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.intializeApp({
    apikey = '',
    authDomain = '',
    databaseURL = '',
    projectId = '',
    storageBucket = '',
    messageSenderId = '',
    apiId = '',
});

export { firebaseConfig as firebase };