
import { singInWithEmailPassword, singInWithGoogle } from "../../../firebase/providers"
import { checkingCredentials, login, logout } from "./AuthSlice"

export const checkingAuthendication = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))
    }
}

export const startCreatedEmailAndPassword = (name, email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const { ok, errorMessage, uid, photoURL } =
            await singInWithEmailPassword({ name, email, password })

        if (!ok) return dispatch(logout(errorMessage))
        dispatch(login({ uid, displayName: name, email, photoURL }))

    }
}