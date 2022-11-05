import * as React from "react";
import "./SignUpScreen.css";
import IconButton from '@mui/material/IconButton';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthButton from "../../components/Buttons/AuthButton";


function SignUpScreen() {

    const [values, setValues] = React.useState({
        name: '',
        password: '',
        email: '',
        mobile: '',
        profile: '',
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

      const onClickSignUp = () => {
        //some logic to authenticate and then show up the home page.
        console.log("Email - "+values.email + " Password - "+ values.password + " Name - " + values.name + " Phone - " + values.phone + " Pic - " + values.profile);
      };


  return (
    <div className="login-screen-body">
      <h1>SIGN UP</h1>

      <div className="form-container">
      <h4>Sign Up to create a new account</h4>

      <TextField sx={{m:1, maxWidth:"100vw"}} id="outlined-basic" label="Name" variant="filled" value={values.name} onChange={handleChange('name')} />
      <TextField sx={{m:1, maxWidth:"100vw"}} type={"email"} id="outlined-basic" label="Email" variant="filled" value={values.email} onChange={handleChange('email')} />
      <TextField sx={{m:1, maxWidth:"100vw"}} id="outlined-basic" label="Phone" variant="filled" value={values.phone} onChange={handleChange('phone')} />
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
  

        <p>Already an User? <a href="www.google.com" style={{textDecoration:"none", fontWeight:"bold", color:"#0983ff"}}>LOGIN</a> here</p> 
        <AuthButton title="Sign Up" onClick={onClickSignUp}/>
      </div>
     
    </div>
  );
}

export default SignUpScreen;
