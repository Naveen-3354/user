import React from 'react'
import './Login.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import { alertClasses } from '@mui/material';

const Login = () => {
    const [state, setState] = useState(true)
    const [button1, setButton1] = useState(<VisibilityOffIcon />)
    const [type, setType] = useState("password")
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const [userNameError, setUserNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [user, setUser] = useState([])
    let status = 0
    const handlePassword = () => {
        if (state === true) {
            setButton1(<VisibilityIcon />)
            setType("text")
            setState(false)
        } else {
            setButton1(<VisibilityOffIcon />)
            setType("password")
            setState(true)
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevalues => ({
            ...prevalues,
            [name]: value,
        }))
    }
    const validation = () => {

        //username validation
        if (values.username == "" || values.username == null) {
            setUserNameError("Enter username")
        }
        else if (!/^[a-zA-Z][a-zA-Z_0-9]{4,10}$/.test(values.username)) {
            setUserNameError("enter name between a-zA-Z charater must from 4to 10.")
        } else {
            setUserNameError("")
            status += 1
        }

        //password vaildation
        if (values.password == "") {
            setPasswordError("Enter password")
        }
        else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
            setPasswordError("password should contain only Uppercase, Lowercase,special charater and number.")
        } else {
            setPasswordError("")
            status += 1
        }
    }
    const clear = () => {
        setValues((preValues) => {
            return {
                ...preValues,
                username: "",
                password: ""
            }
        })
    }
    const handleClick = () => {
        validation()
        if (status == 2) {
            //     fetch(`http://localhost:8080/student/login/username?name=${values.userName+" "+values.password}`)
            //     .then((response) => response.text())
            //     .then((data) => console.log(data));
            //   console.log(user)
            fetch("http://localhost:8080/student/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            }).then((response) => response.text())
                .then((result) => {
                    // alert(result)
                    if (result === values.username) {
                        alert("You are logged in.");
                    } else {
                        alert("Please check your login information.");
                    }
                });
                clear()
        }
        status = 0
    }
    





return (
    <div className='login'>
        <div className='card'>
            <div className='h1'>
                <h1>Login</h1>
            </div>
            <div className='user'>
                <PersonIcon />
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="UserName"
                        value={values.username}
                        onChange={handleChange} /><br />
                    <span className='errors'>{userNameError}</span>
                </div>
            </div><br />
            <div className='password'>
                <LockIcon />
                <div>
                    <input
                        type={type}
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange} /><br />
                    <span className='errors'>{passwordError}</span>
                </div>
                <button onClick={handlePassword}>{button1}</button>
            </div><br />
            <div className='loginbutton'>
                <button onClick={handleClick}>Login</button>
                <br />
            </div>

            <div className='register'>
                <span>Don't have an account?</span>
                <Link to="register"><button>Register</button></Link>
            </div>
        </div>
    </div>
)
}

export default Login