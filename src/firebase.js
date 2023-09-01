import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCIyLKnTquZhg5CzGaPX9Di_V6DmWF_4co",
  authDomain: "linkedin-clone-20664.firebaseapp.com",
  projectId: "linkedin-clone-20664",
  storageBucket: "linkedin-clone-20664.appspot.com",
  messagingSenderId: "391489865787",
  appId: "1:391489865787:web:2a6cf04b2f512de70c741e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
// measserment Id is not their
