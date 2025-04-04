
import { createdEmailAndPassword, firebaseLogout, singInWithEmailAndPassword, singInWithGoogle } from "../../../firebase/providers"
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
            await createdEmailAndPassword({ name, email, password })

        if (!ok) return dispatch(logout(errorMessage))
        dispatch(login({ uid, displayName: name, email, photoURL }))

    }
}


export const startLoginWithEmailAndPassword = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const resp = await singInWithEmailAndPassword(email, password);        

        if (!resp.ok) return dispatch(logout(resp.errorMessage));

        dispatch(login(resp))
    }
}

export const startLogOut= () => {
    return async (dispatch) => {
        await firebaseLogout()
        await dispatch(logout())
    }
}