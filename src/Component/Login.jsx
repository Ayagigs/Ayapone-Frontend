import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import GoogleButton from "react-google-button";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "64px 40px",
    gap: "4px",
    position: "absolute",
    width: "400px",
    height: "490px",
    left: "470px",
    top: "206px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "36px",
    maxHeight: "100vh",
  },

  textField: {
    width: "100%",
  },

  button: {
    width: "100%",
    marginTop: "16px",
    backgroundColor: "#FF7417",
  },

  loginText: {
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "33px",
    display: "flex",
    alignItems: "center",
    color: "#483C31",
    flex: "none",
    order: 0,
    flexGrow: 0,
  },

  loginStatement: {
    width: "240px",
    height: "22px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",
    color: "#483C31",
  },

  emailInputLabel: {
    position: "absolute",
    width: "285px",
    height: "21px",
    left: "5px",
    top: "130px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.005em",
    color: "#483C31",
  },
  forgetPassword: {
    color: "#FF7417",
    position: "absolute",
    width: "137px",
    height: "22px",
    left: "285px",
    top: "425px",
    fontFamily: 'Noto Sans',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",
   
  },
});

const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Paper className={classes.root}>
      <Typography className={classes.loginText}>Login</Typography>
      <Typography className={classes.loginStatement}>
        Login to your Ayapone account
      </Typography>
      <br />

      <GoogleButton type="light" label="Continue with Google" />

      <br /><br />

      <Divider>OR</Divider>

      <TextField
        className={classes.textField}
        label="Email Adress or Phone Number"
        variant="outlined"
        margin="normal"
        type={showPassword ? "text" : "password"}
      />
      <br />
      <TextField
        className={classes.textField}
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Typography className={classes.forgetPassword}>Forgot Password?</Typography>
      <br />
      <br />
      <Button className={classes.button} variant="contained">
        Login
      </Button>
      
    </Paper>
  );
};

export default Login;
