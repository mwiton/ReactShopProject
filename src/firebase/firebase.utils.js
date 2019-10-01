import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDYc6Ng24qWAHuCdTUOKgKqEtAv4I1NLqo",
    authDomain: "reactshopproject-4a6ca.firebaseapp.com",
    databaseURL: "https://reactshopproject-4a6ca.firebaseio.com",
    projectId: "reactshopproject-4a6ca",
    storageBucket: "",
    messagingSenderId: "254758261942",
    appId: "1:254758261942:web:b1b9b91148aa410f7fc217",
    measurementId: "G-97T6J57LKN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error creating user', e.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
