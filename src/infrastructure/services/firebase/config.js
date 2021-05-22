import firebase from 'firebase/app'
import  'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

let app = firebase.initializeApp(firebaseConfig);

export const authentication = firebase.auth(app);
export const firestore = firebase.firestore(app);
export const database = firebase.database(app);
export const storage = firebase.storage(app)
export const provider=new firebase.auth.GoogleAuthProvider();