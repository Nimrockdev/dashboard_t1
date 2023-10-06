import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import {
  Alert,
  Button,
  Grid,
  //Link,
  TextField,
  Typography,
} from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm, useAuthStore } from "../../hooks/";

const formData = {
  user: "",
  password: "",
};

export const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore();

  //const dispatch = useDispatch();
  const { user, password, onInputChange } = useForm(formData);

  //const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit!!");

    startLogin({ user: user, password: password });
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Usuario"
              type="user"
              placeholder="user"
              fullWidth
              name="user"
              value={user}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container display={!!errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                //disabled={ isAuthenticating }
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                //disabled={ isAuthenticating }
                variant="contained"
                fullWidth
                /*onClick={ /*onGoogleSignIn }*/
              >
                <Typography sx={{ ml: 1 }}>Registrar</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
