import React, { useState } from 'react'
import './css/Register.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './css/Login.css'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './css/Register.css'
import axios from '../util/axios'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Register() {

    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const[phoneno, setPhoneNo] = useState("");
    const[email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const [error,setError] = useState(false);
    const history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > * .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            flexDirection: 'column',
          },
        },
        btn: {
            marginTop: "5ch"
        }
    }));
    const classes = useStyles();

    const register = (e) => {

        e.preventDefault();
        axios.post('/api/auth/register', {
            username: name,
            email: email,
            password : password,
            phoneno: phoneno,
            address: address

        })
        .then(msg => {
            if(msg) {

                cookies.set('username', name);
                cookies.set('email', email);
                cookies.set('phoneno', phoneno);
                cookies.set('address', address);




            }
        })
        .catch((error) => {

            setError(true)

        })
        history.push("/store")
    }



    return (

        <>
            <section className="main">
                <h1 className="header">Register to Bitz</h1>
                {error ? (
                    <h1>Please enter correct information</h1>
                ): " "} 
                <form className="form-c" noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Username" name='username' value={name} onChange={e => setName(e.target.value)} />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value ={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <TextField id="standard-basic" 
                        label="Email" 
                        name='email' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                    <TextField id="standard-basic" 
                        label="Phone No." 
                        name='phoneno' 
                        value={phoneno}
                        onChange={e => setPhoneNo(e.target.value)}

                    />
                    <TextField
                    id="standard-textarea"
                    label="Address"
                    placeholder="Placeholder"
                    name="address"
                    multiline
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    />
                </form>
                <Button  className={classes.btn} variant="contained" onClick={register}>Submit</Button>
            </section>

        </>
    )
}

export default Register
