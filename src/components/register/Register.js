import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const [state, setState] = useState(true)
    const [type, setType] = useState("password")
    const [button1, setButton1] = useState(<VisibilityOffIcon />)
    const [userNameError, setUserNameError] = useState("")
    const [mobileNumberError, setMobileNumberError] = useState("")
    const [emailError, setEmailErrorr] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confrimPasswordError, setConfrimPasswordError] = useState("")
    const navigate = useNavigate();
    let status=0
    const [values, setValues] = useState({
        username: "",
        number: "",
        email: "",
        password: "",
        confrimPassword: ""
    })
    const showPassword = () => {
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
        const { value, name } = e.target
        setValues((preValues) => {
            return {
                ...preValues, [name]: value
            }
        })
    }
    const validation = () => {
        //username validation
        if (values.username == null || values.username == "") {
            setUserNameError("Enter username")
        } else if (!/^[a-zA-Z][a-zA-Z_0-9]{4,10}$/.test(values.username)) {
            setUserNameError("enter name between a-zA-Z charater must from 4to 10.")
        } else {
            setUserNameError("")
            status+=1
        }
        //mobileNumber validation
        if (values.number == "") {
            setMobileNumberError("Enter number")
        }
        else if (values.number.length != 10) {
            setMobileNumberError("Invalid number")
        } else {
            setMobileNumberError("")
            status+=1
        }
        //email validation
        if (values.email == "") {
            setEmailErrorr("Enter email")
        }
        else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
            setEmailErrorr("Enter valid email")
        }else {
            setEmailErrorr("")
            status+=1
        }
        //password validation
        if(values.password==""){
            setPasswordError("Enter password")
        }
        else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)){
            setPasswordError("password should contain only Uppercase, Lowercase,special charater and number.")
        }else {
            setPasswordError("")
            status+=1
        }
        //confrimPassword validation
        if(values.confrimPassword!=values.password){
            setConfrimPasswordError("password don't match")
        }else {
            setConfrimPasswordError("")
            status+=1
        }
    }
    const clear=()=>{
        setValues((preValues)=>{
            return{
                ...preValues,username: "",
                number: "",
                email: "",
                password: "",
                confrimPassword: ""
            }
        })
    }
    const navigateToLogin = () => {
        navigate('/');
      };
    const handleRegister = () => {
        validation()
        if(status==5){
            fetch("http://localhost:8080/student/addStudent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
            }).then(console.log("student added sccussesfully"));
            clear()
            navigateToLogin()
        }
        status=0
        
    }
    return (
        <div className='login'>
            <div className='card'>
                <div className='h1'>
                    <h1>Register</h1>
                </div>

                <div className='user'>
                    <PersonIcon />
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                        /><br />
                        <span className='error'>{userNameError}</span>
                    </div>
                </div>

                <div className='user'>
                    <LocalPhoneIcon />
                    <div>
                        <input
                            type="number"
                            name="number"
                            placeholder="Number"
                            value={values.number}
                            onChange={handleChange}
                        /><br />
                        <span className='error'>{mobileNumberError}</span>
                    </div>
                </div>

                <div className='user'>
                    <MailOutlineIcon />
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                        /><br />
                        <span className='error'>{ emailError}</span>
                    </div>
                </div>

                <div className='user'>
                    <LockIcon />
                    <div>
                        <input
                            type={type}
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        /><br />
                        <span className='error'>{passwordError }</span>
                    </div>
                    <button onClick={showPassword}>{button1}</button>
                </div>

                <div className='user'>
                    <LockIcon />
                    <div>
                        <input
                            type="text"
                            name="confrimPassword"
                            placeholder=" Confirm Password"
                            value={values.confrimPassword}
                            onChange={handleChange}
                        /><br />
                        <span className='error'>{ confrimPasswordError}</span>
                    </div>
                </div>

                <div className='loginbutton'>
                    <button onClick={handleRegister}>Register</button>
                </div><br />

                <div className='register'>
                    <span>Already have an account!</span>
                    <Link to='/'><button>Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Register