import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (

    <AuthLayout title="Login">

      <form>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              placeholder="correo@correo.com"
              type="email"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              placeholder="password"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" fullWidth>
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
