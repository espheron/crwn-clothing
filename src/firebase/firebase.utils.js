import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBI23sZRqyrXS0ow2CLXKifSPdJ_lMSrGU",
    authDomain: "crwn-db-32e94.firebaseapp.com",
    databaseURL: "https://crwn-db-32e94.firebaseio.com",
    projectId: "crwn-db-32e94",
    storageBucket: "crwn-db-32e94.appspot.com",
    messagingSenderId: "288467195828",
    appId: "1:288467195828:web:757dfb6339aa8e42e044e1",
    measurementId: "G-7WYX13QXR5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;