"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

import Copyright from "@/components/copyright";
import { login } from "@/services/authService";
import FeedbackSnackbar from "@/components/feedbackSnackbar";
import { AppRoutes } from "@/constants/appRoutes";

export default function Login() {
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      setIsLoadingAnimation(true);
      await login({
        email: data.get("email"),
        password: data.get("password"),
        rememberMe: rememberMe,
      });
      /* handleOpenSnackbar({
        severity: "success",
        message: "Sucesso: login efetuado com êxito!",
      }); */
      push(AppRoutes.private.dashboard);
    } catch (error) {
      handleOpenSnackbar({
        severity: "error",
        message: error,
      });
    } finally {
      setIsLoadingAnimation(false);
    }
  };

  /*  */
  const [isLoadingAnimation, setIsLoadingAnimation] = React.useState(false);

  /*  */
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severitySnackbar, setSeveritySnackbar] = React.useState<
    "success" | "info" | "warning" | "error"
  >("warning");
  const [messageSnackbar, setMessageSnackbar] = React.useState("");

  const handleOpenSnackbar = (props: any) => {
    setSeveritySnackbar(props.severity);
    setMessageSnackbar(props.message);
    setOpenSnackbar(true);
  };

  /*  */
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://live.staticflickr.com/65535/52830107256_5e0224d79d_5k.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <img
              src="https://www.gov.br/pf/pt-br/principios-fundamentais/simbolos-da-policia-federal-2/emblema.png/@@images/image.png"
              style={{ maxWidth: "70px" }}
            />
          </Box>
          <Typography component="h1" variant="h6">
            Fazer logon
          </Typography>
          <Typography variant="subtitle1">
            Para sua proteção, verifique a sua identidade.
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="dense"
              required
              fullWidth
              variant="standard"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="dense"
              required
              fullWidth
              variant="standard"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Lembrar-me"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              {isLoadingAnimation ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Continuar"
              )}
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  underline="hover"
                >
                  Redefina sua senha
                </Link>
              </Grid>
            </Grid>  */}
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <FeedbackSnackbar
        open={openSnackbar}
        severity={severitySnackbar}
        message={messageSnackbar}
        onClose={() => setOpenSnackbar(false)}
      />
    </Grid>
  );
}
