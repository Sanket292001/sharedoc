import * as React from "react";

import "./LoginScreen.css";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AuthButton from "../../components/Buttons/AuthButton";

function LoginScreen() {

  const navigateTo = () => {
    window.location.href = "/sign-up";
  };
  
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClickLogin = () => {
    //some logic to authenticate and then show up the home page.
    //In this case the routing will be done using the express middleware. 
    console.log("Email - " + values.email + " Password - " + values.password);
    //but for now this is where we will want to go.
    window.location.href = "/ind-home";
  };

  return (
    <div className="login-screen-body">
      <h1>LOGIN</h1>

      <div className="form-container">
        <h4>Sign In to your existing account</h4>

        <TextField
          sx={{ m: 1, maxWidth: "100vw" }}
          id="outlined-basic"
          label="Email"
          variant="filled"
          value={values.email}
          onChange={handleChange("email")}
        />
        <FormControl sx={{ m: 1, maxWidth: "100vw" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <p>
          Not an User?{" "}
          <span style={{textDecoration:"none", fontWeight:"bold", color:"#0983ff", cursor:'pointer'}} onClick={navigateTo}>SIGN UP</span>
        </p>
        
        <AuthButton title="Login" onClick={onClickLogin} />
      </div>

    </div>
  );
}

export default LoginScreen;
