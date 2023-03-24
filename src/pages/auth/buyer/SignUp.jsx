import React, { useState } from "react";
import { makeStyles } from "@mui/base";
import {
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/base";
import Link from "@mui/material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/material";
import VisibilityOffIcon from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import AyaponeLogo from '../../../assets/images/ayapone_logo.svg'

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "64px 40px",
    position: "absolute",
    width: "507px",
    height: "620px",
    left: "467px",
    top: "210px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "36px",
  },
  logo: {
    position: "absolute",
    width: "334px",
    height: "143px",
    left: "580px",
    top: "64px",
    color: "black",
  },

  textField: {
    width: "100%",
  },

  signUpText: {
    height: "33px",
    left: "68.5px",
    top: "0px",
    fontfamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "3px",
    display: "flex",
    alignItems: " center",
    color: "#483C31",
  },
  belowSignUpText: {
    width: "227px",
    height: "22px",
    left: "0px",
    marginTop: "2px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "2px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.0125em",
    color: "#483C31",
  },
  allReady: {
    display: "flex",
    margin: "auto",
    width: "250px",
    height: "22px",
    left: "10px",
    top: "0px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.0125em",
    color: "#483C31",
  },

  login: {
    width: "50px",
    height: "22px",
    left: "2px",
    top: "0px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.0125em",
    color: "#FF7417",
    
  },

  labels: {
    position: "absolute",
    width: "46px",
    height: "2px",
    left: "40px",
    bottom: "600px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: " 400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.005em",
    color: "#483C31",
  },
  email: {
    position: "absolute",
    width: "150px",
    height: "2px",
    left: "40px",
    bottom: "511px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: " 400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.005em",
    color: "#483C31",
  },
  phone: {
    position: "absolute",
    width: "150px",
    height: "2px",
    left: "40px",
    bottom: "417px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: " 400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.005em",
    color: "#483C31",
  },
  password: {
    position: "absolute",
    width: "150px",
    height: "2px",
    left: "40px",
    bottom: "325px",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: " 400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.005em",
    color: "#483C31",
  },
  
});

const SignUp = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div>
        <img src={AyaponeLogo} alt="logo" className={classes.logo}/>
    <Paper className={classes.paper}>
      <Typography className={classes.signUpText}>Sign Up</Typography>
      <Typography className={classes.belowSignUpText}>
        Create your Ayapone account
      </Typography>
      <br />
      <br />
      <br />
      <inputLabel className={classes.labels}>Name</inputLabel>
      <TextField
        label="Name"
        variant="outlined"
        className={classes.textField}
      />
      <br />
      <br />
      <inputLabel className={classes.email}>Email Adress</inputLabel>
      <TextField
        label=" Enter Email Address"
        variant="outlined"
        className={classes.textField}
      />
      <br />
      <br />
      <inputLabel className={classes.phone}>Phone Number</inputLabel>
      <TextField
        label="Enter Phone Number"
        variant="outlined"
        className={classes.textField}
      />
      <br />
      <br />
      <inputLabel className={classes.password}>Password</inputLabel>
      <TextField
        label="Password"
        variant="outlined"
        onChange={(e) => setShowPassword(e.target.value)}
        className={classes.textField}
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
      <br />
      <br />
      <Button variant="contained" className={classes.textField} style
      ={{height: "50px", backgroundColor:"#FF7417", borderRadius: "8px"}}>
        Sign Up
      </Button>
      <br />
      <Typography className={classes.allReady} align="center">
        Already have an account?
        <Link href="#" underline="none" className={classes.login} style={{color: "#FF7417"}}>
          Login
        </Link>
      </Typography>
      <br />
      <Typography align="center">
        By signing up you accept our <Link href="#" underline="none" style={{color: "#FF7417"}}>terms and conditions & <br/> private policies
        </Link>
      </Typography>
    </Paper>
    </div>
  );
};

export default SignUp;
