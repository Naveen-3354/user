const validation = (values) => {
    const errors={}

    if(values.userName == ""){
        errors.name="Enter username"
    }
    else if(!/^[a-zA-Z][a-zA-Z_0-9]{4,10}$/.test(values.userName)){
        errors.name="enter name between a-zA-Z charater must from 4to 10."
    }
    if(values.mobileNumber==""){
        errors.number="Enter number"
    }
    else if(values.mobileNumber.length!=10){
        errors.number="Invalid number"
    }
    if(values.email==""){
        errors.email="Enter email"
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="Enter valid email"
    }
    if(values.password==""){
        errors.password="Enter password"
    }
    else if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)){
        errors.password="password should contain only Uppercase, Lowercase,special charater and number."
    }
    if(values.confirmPassword!=values.password){
        errors.confirmPassword="password don't match"
    }
    
  return (
    errors
  )
}

export default validation

