import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import CustomCheckbox from "../../src/components/forms/custom-elements/CustomCheckbox";
import img1 from "../../assets/images/backgrounds/login-bg1.png";
import LogoIcon from "../../src/layouts/logo/LogoIcon";
import Customizer from "../../src/layouts/customizer/Customizer";
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => (
  <Grid container sx={{ height: "100vh", justifyContent: "center" }}>
    <Grid
      item
      xs={12}
      sm={12}
      lg={6}
      sx={{
        background: (theme) =>
          `${theme.palette.mode === "dark" ? "#1c1f25" : "#ffffff"}`,
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: {
              xs: "relative",
              lg: "absolute",
            },
            height: { xs: "auto", lg: "100vh" },
            right: { xs: "auto", lg: "-50px" },
            margin: "0 auto",
          }}
        >
          <Image src={img1} alt="bg" maxWidth="812" />
        </Box>

        <Box
          sx={{
            p: 6,
            position: "absolute",
            top: "0",
          }}
        >
          <LogoIcon />
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
      <Grid container spacing={0} display="flex" justifyContent="center">
        <Grid item xs={12} lg={9} xl={6}>
          <Box
            sx={{
              p: 4,
            }}
          >
            <Typography fontWeight="700" variant="h2">
              Bienvenido a Darnel
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography
                color="textSecondary"
                variant="h6"
                fontWeight="500"
                sx={{
                  mr: 1,
                }}
              >
                Nuevo en el portal?
              </Typography>
              <NextLink href="/authentication/404">
                <Typography
                  fontWeight="500"
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    color: "primary.main",
                    cursor: "pointer",
                  }}
                >
                  Crear cuenta
                </Typography>
              </NextLink>
            </Box>
            <Box
              sx={{
                mt: 4,
              }}
            >
              
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "flex",
                    lg: "flex",
                  },
                  alignItems: "center",
                }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckbox defaultChecked />}
                    label="Mantener Sesión"
                    sx={{
                      mb: 2,
                    }}
                  />
                </FormGroup>
                <Box
                  sx={{
                    ml: "auto",
                  }}
                >
                  <NextLink href="/authentication/404">
                    <Typography
                      fontWeight="500"
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        mb: "16px",
                        color: "primary.main",
                        cursor: "pointer",
                      }}
                    >
                      Olvido la Contraseña ?
                    </Typography>
                  </NextLink>
                </Box>
              </Box>

              <NextLink href="/">
                <Button
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    pt: "10px",
                    pb: "10px",
                  }}
                  onClick={() => signIn()}
                >
                  Ingresar
                </Button>
              </NextLink>
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  mt: "20px",
                  mb: "20px",
                  "&::before": {
                    content: '""',
                    background: (theme) =>
                      `${
                        theme.palette.mode === "dark" ? "#42464d" : "#ecf0f2"
                      }`,
                    height: "1px",
                    width: "100%",
                    position: "absolute",
                    left: "0",
                    top: "13px",
                  },
                }}
              >
                
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    <Customizer />
  </Grid>
);
Login.layout = "Blank"
export default Login;
