import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "j",
    messagingSenderId: "",
    appId: ""
}

const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore()
