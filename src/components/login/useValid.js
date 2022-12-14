const validation = (values) => {
    const errors={}

    if(values.userName == ""){
        errors.name="Enter username"
    }
    else if(!/^[a-zA-Z][a-zA-Z_0-9]{4,10}$/.test(values.userName)){
        errors.name="enter name between a-zA-Z charater must from 4to 10."
    }
    if(values.password==""){
        errors.password="Enter password"
    }
    else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)){
        errors.password="password should contain only Uppercase, Lowercase,special charater and number."
    }
    
    
  return (
    errors
  )
}

export default validation

