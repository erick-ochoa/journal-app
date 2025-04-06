import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startGoogleSingIn, startLoginWithEmailAndPassword } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react"

export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const isCheckingAuth = useMemo(() => status === 'checking' ? true : false, [status])

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password))
  }

  const onGoogleSingIn = () => {
    dispatch(startGoogleSingIn())
  }

  return (

    <AuthLayout title="Login">

      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              placeholder="correo@correo.com"
              type="email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              placeholder="password"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid
            container
            spacing={2}
            sx={{ mb: 1, mt: 1 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isCheckingAuth}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                disabled={isCheckingAuth}
                onClick={onGoogleSingIn}
                variant="outlined"
                fullWidth
              >
                <Google /> <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Link component={RouterLink} color="inherit" to={"/auth/register"}>
              Crear una cuenta
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>



  )
}
