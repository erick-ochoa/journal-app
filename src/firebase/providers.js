import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const { uid, displayName, photoURL, email } = result.user

        return {
            ok: true,
            uid,
            displayName,
            photoURL,
            email
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}


export const createdEmailAndPassword = async ({ name, email, password }) => {
    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const { uid, photoURL } = resp.user

        await updateProfile(FirebaseAuth.currentUser, { displayName: name })

        return { ok: true, uid, photoURL, email, name };

    } catch (error) {
        return { ok: false, errorMessage: error.code }
    }
}


export const singInWithEmailAndPassword = async (email, password) => {

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, displayName, photoURL } = resp.user

        return {
            ok: true,
            uid,
            displayName,
            photoURL
        }

    } catch (error) {
        return { ok: false, errorMessage: error.code }
    }
}


export const firebaseLogout = async() => {
    return await FirebaseAuth.signOut()
}