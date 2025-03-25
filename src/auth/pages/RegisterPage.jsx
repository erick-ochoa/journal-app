import { Button, Grid, TextField, Link, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">

      <form>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              placeholder="Erick Ochoa"
              type="text"
              fullWidth
            />
          </Grid>

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
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Crear cuenta</Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to={"/auth/login"}>
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
