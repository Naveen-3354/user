import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const Formsign = () => {
  const errors = {}
  const status = 0
  const [state, setState] = useState(true)
  const [button1, setButton1] = useState(<VisibilityOffIcon />)
  const [type, setType] = useState("password")
  const [values, setvalues] = useState({
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalues(prevalues => ({
      ...prevalues,
      [name]: value,
    }))
  }
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

  const handleRegister = () => {
    alert("qwe")
    
  }
 

  return (
    { showPassword, handleChange, button1, type, values, errors, handleRegister }
  )
}

export default Formsign