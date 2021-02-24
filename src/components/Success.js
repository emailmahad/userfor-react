import React from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import  AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"



class Success extends React.Component {

continue = e => {
  e.preventDefault()
  this.props.nextStep()
}

render () {

  
  return (
    <MuiThemeProvider>
    <React.Fragment>
     <AppBar title="Success"/>
      <h1>Thank You For Your Submission.</h1>
      <p>You will receive an email with further instructions.</p>
     </React.Fragment>
     </MuiThemeProvider>
  )
}

}



export default Success