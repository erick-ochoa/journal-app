import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {

        const result = await signInWithPopup(firebaseAuth, googleProvider)
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