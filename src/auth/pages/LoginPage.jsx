import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { checkingAuthendication } from "../../store/slices/auth/thunks"
import { useDispatch } from "react-redux"

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'erick.ochoa.vls@gmail.com',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(checkingAuthendication(email, password))
  }

  const onGoogleSingIn = () => {
    dispatch(checkingAuthendication(email, password))
  }

  return (

    <AuthLayout title="Login">

      <form onSubmit={onSubmit}>
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

          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSingIn} variant="outlined" fullWidth>
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
