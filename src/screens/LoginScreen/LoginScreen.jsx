import * as React from "react";
import "./LoginScreen.css";
import IconButton from '@mui/material/IconButton';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthButton from "../../components/Buttons/AuthButton";


function LoginScreen() {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const [email, setEmail] = React.useState("");
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
    
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
        const password = values.password;
        console.log("Email - "+email + " Password - "+ password);
      };


  return (
    <div className="login-screen-body">
      <h1>LOGIN</h1>

      <div className="form-container">
      <h4>Sign In to your existing account</h4>

      <TextField sx={{m:1, maxWidth:"100vw"}} id="outlined-basic" label="Email" variant="filled" value={email} onChange={handleEmailChange} />
      <FormControl sx={{m:1, maxWidth:"100vw"}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
  

        <p>Not an User? <a href="www.google.com" style={{textDecoration:"none", fontWeight:"bold", color:"#0983ff"}}>SIGN UP</a> here</p> 
        <AuthButton title="Login" onClick={onClickLogin}/>
      </div>
     
    </div>
  );
}

export default LoginScreen;
