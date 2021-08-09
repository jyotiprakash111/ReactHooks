import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const Login = (props) => {
  const paperStyle = {
    padding: 30,
    height: "70vh",
    width: 300,
    margin: "30px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnStyle = {margin: "8px 0px"}
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Signin</h2>
          </Grid>
          <TextField
            label='userName'
            placeholder='Enter username'
            fullWidth
            required
          />
          <TextField
            label='passsword'
            placeholder='Enter password'
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name='checkbox' color='primary' />}
            label='Remember me'
          />
          <Button type='submit' color='primary' variant='contained' fullWidth style={btnStyle}>
            Signin
          </Button>
          <Typography>
            <Link href='#'>Forgot Pass</Link>
          </Typography>
          <Typography>
            Do you have an account ?<Link href='#'>Signup ?</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
