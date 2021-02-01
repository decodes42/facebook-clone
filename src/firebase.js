import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAYmGnjU-VFOPTB6iWdMeGy37MsFeZPGOU",
    authDomain: "fb-clone-f3286.firebaseapp.com",
    projectId: "fb-clone-f3286",
    storageBucket: "fb-clone-f3286.appspot.com",
    messagingSenderId: "262942788793",
    appId: "1:262942788793:web:e6236eb27829b664eedf68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
// This will tell the provider we want the google sign in
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

