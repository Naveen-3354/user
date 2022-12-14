import React from 'react'

const StudentModule = (values) => {
  return (
    <div className='module'>
         <div className='card'>
            <div className='detail'>
                {values.map((data)=>{
                    return(
                        <>
                        <h1>{data.username}</h1><br/>
                        <h4>Number :</h4>
                        <p>{data.number}</p>
                        <h4>Email :</h4>
                        <p>{data.email}</p>
                        <h4>Password :</h4>
                        <p>{data.password}</p>
                        </>
                    )
                })}
            </div>
         </div>
    </div>
  )
}

export default StudentModule