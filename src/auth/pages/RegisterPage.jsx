import { Button, Grid, TextField, Link, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"

const formData = {
  name: '',
  email: '',
  password: ''
}

const formValidtions = {
  name: [(value) => value.length >= 1, 'EL nombre es obligatorio'],
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener minimo 6 caracteres']
}

export const RegisterPage = () => {

  const [formSubmit, setFormSubmit] = useState(false)

  const {
    name, email, password, onInputChange, isFormValid, nameValid, emailValid, passwordValid
  } = useForm(formData, formValidtions)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmit(true)
  }

  return (
    <AuthLayout title="Crear cuenta">

      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              placeholder="Erick Ochoa"
              type="text"
              fullWidth
              name="name"
              value={name}
              onChange={onInputChange}
              error={!!nameValid && formSubmit}
              helperText={!!nameValid && formSubmit ? nameValid : null}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              placeholder="correo@correo.com"
              type="email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmit}
              helperText={!!emailValid && formSubmit ? emailValid : null}
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
              error={!!passwordValid && formSubmit}
              helperText={!!passwordValid && formSubmit ? passwordValid : null}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>Crear cuenta</Button>
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
