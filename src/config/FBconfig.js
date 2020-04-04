import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA3Xgeq7qCJtiK0caik5Gmsa69gNRzg6Wo",
    authDomain: "join-the-force-2b92e.firebaseapp.com",
    databaseURL: "https://join-the-force-2b92e.firebaseio.com",
    projectId: "join-the-force-2b92e",
    storageBucket: "join-the-force-2b92e.appspot.com",
    messagingSenderId: "492411876511",
    appId: "1:492411876511:web:287a61ceeaadffbb4cdeaa"
}

const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore()
