
import { singInWithGoogle } from "../../../firebase/providers"
import { checkingCredentials, login, logout } from "./AuthSlice"

export const checkingAuthendication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()

        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch( login(result) )
    }
}