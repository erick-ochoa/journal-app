import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/CheckingAuth'
import { useCheckAurth } from '../hooks/useCheckAurth'


export const AppRouter = () => {

    const { status } = useCheckAurth()

    if (status === 'checking') {
        return < CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path='/*' element={<JournalRoutes />} />
                    : <Route path='auth/*' element={<AuthRoutes />} />
            }
            <Route path='/*' element={<Navigate to='/auth/login' />} />

        </Routes>
    )
}
