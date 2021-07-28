import useStyles from "./styles";
import {
  Avatar,
  Paper,
  Button,
  Grid,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const Auth = () => {
  const classes = useStyles();
  const isSignUp = false;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log("handle change");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Grid xs={6} m={12}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    onChange={handleChange}
                    autoFocus
                    xs={6}
                  />
                </Grid>

                <Grid xs={6} m={12}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    onChange={handleChange}
                    autoFocus
                    xs={6}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
