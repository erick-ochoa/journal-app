
import { checkingCredentials } from "./AuthSlice"

export const checkingAuthendication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = (email, password) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() )
    }
}