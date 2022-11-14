import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCuIcycvkCnyUb_W7v-aUkW3H4xUy2MLJU",
  authDomain: "bakar-48bc8.firebaseapp.com",
  projectId: "bakar-48bc8",
  storageBucket: "bakar-48bc8.appspot.com",
  messagingSenderId: "349433378359",
  appId: "1:349433378359:web:4e7b95b55db5629b48f1b2",
  measurementId: "G-0EDJKCQHZQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const createUser = async (email, password, displayName) => {
  try {
    let user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    alert(`Hoş geldiniz Sn. ${displayName}`);
    console.log(user);
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("İşin rast gelsin!!!");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      console.log(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem(
        "items",
        JSON.stringify({ name, email, profilePic })
      );
      console.log(name);
      //   alert(`Hoş geldiniz Sn. ${name}`)
    })
    .catch((error) => {
      console.log(error);
    });
};
