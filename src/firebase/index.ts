import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAyJSHiqBkPnQ3Rh25dUb0lvI0UIzZ-m9Y',
    authDomain: 'wedding-wishes-2c893.firebaseapp.com',
    projectId: 'wedding-wishes-2c893',
    storageBucket: 'wedding-wishes-2c893.appspot.com',
    messagingSenderId: '615307480898',
    appId: '1:615307480898:web:a89450bdbe3d74ed4602db',
    measurementId: 'G-N98MR3JJLM',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebase = {
    database: getFirestore(app),
}
