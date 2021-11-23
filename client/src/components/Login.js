import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './css/Login.css'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import axios from '../util/axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies()

function Login() {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);

    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
        btn: {
            marginTop: "5ch"
        }
    }));
    const classes = useStyles();

    const submit = async (e) => {

        e.preventDefault();
        await axios.post('/api/auth/login', {
            username: name,
            password : password
        })
        .then(msg => {
            if(msg.data.success) {
                history.push("/store")
                cookies.set("username", name)
            }
        })
        .catch((error) => {

            setError(true)

        })




    }

    const reg = () => {
        history.push("/register")
    }


    return (
        <>
            <section className="main-login" data-testid="mainpage">
                <h1 className="header">Login to Bitz</h1>
                {error ?(
                    <h1 className="wrong">Wrong credentials</h1>
                ) :" "}
                <form className={classes.root} noValidate autoComplete="off" data-testid="login-1">

                    <TextField id="standard-basic" label="Username" name='username' value={name} onChange={e => setName(e.target.value)} data-testid="namefield" />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        data-testid="passwordField"
                    />
                </form>
                <Button  className={classes.btn} variant="contained" onClick={submit}>Submit</Button>
                <Button className={classes.btn} color="secondary" onClick={() => reg()}>Not yet Registered? Click Here!</Button>
            </section>

        </>
    )
}

export default Login
