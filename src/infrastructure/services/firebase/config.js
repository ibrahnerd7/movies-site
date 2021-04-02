import firebase from 'firebase/app'
import  'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCCwjzs1PkK1jyRhw-HbGpV902ULN4Ps14",
    authDomain: "movies-site-a28eb.firebaseapp.com",
    projectId: "movies-site-a28eb",
    storageBucket: "movies-site-a28eb.appspot.com",
    messagingSenderId: "632453901171",
    appId: "1:632453901171:web:1ebfc7a8de973365f17306",
    measurementId: "G-303BZT6JX3"
}

let app = firebase.initializeApp(firebaseConfig);

export const authentication = firebase.auth(app);
export const firestore = firebase.firestore(app);
export const storage = firebase.storage(app)