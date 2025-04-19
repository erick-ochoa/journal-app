import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth/AuthSlice'
import { startLoadingNotes } from '../store/journal/thunks'

export const useCheckAurth = () => {
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            // No hay usuario logeado, redireccionar al login
            if (!user) return dispatch(logout());

            // Si hay un usuario logeado
            // Guardar datos del usuario
            const { uid, email, displayName, photoURL } = user
            dispatch(login({ uid, email, displayName, photoURL }))

            // Obtener las notas del usuario
            dispatch( startLoadingNotes() )
        })
    }, [])

    return {
        status
    }
}
