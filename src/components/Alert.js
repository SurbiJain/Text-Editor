import React from 'react'

export default function Alert(props) {
  console.log(props.alert);
  return (
    
    props.alert.msg && <div className={`alert alert-${props.alert.type} alert-dismissible fade show main-body`} role="alert">
     <strong>{props.alert.type} </strong>: {props.alert.msg}
    
     
  </div>
  )
}
