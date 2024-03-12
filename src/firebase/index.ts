import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBYGDv9lj8gk_F1scEXgWKKwiMcacrnCzU',
    authDomain: 'dathue-wedding.firebaseapp.com',
    projectId: 'dathue-wedding',
    storageBucket: 'dathue-wedding.appspot.com',
    messagingSenderId: '192974160270',
    appId: '1:192974160270:web:18f0ae71ad5fac3ae724df',
    measurementId: 'G-7D1V2PXF3B',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebase = {
    database: getFirestore(app),
}
