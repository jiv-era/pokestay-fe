import React from 'react';  
import './App.css';

import Home from './static/Home.js'

import LoginForm from './user/LoginForm.js'
import SignUpForm from './user/SignUpForm.js'

import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  state = {
    currentUser: null
  }

  logOut = () => {
    this.setState({
      currentUser: null
    }, () => {
      this.props.history.push(`/login`)
    })
  }

  componentDidMount(){
    const userID = localStorage.getItem("user_id")
    if(userID){
      fetch(`http://localhost:3000/api/v1/auto_login`, {
        headers: {
          "Authorization": userID
        }
      })
      .then(resp => resp.json())
      .then(data => {
          if(data.errors){
            alert(data.errors)
          } else {
          this.setState({ 
            currentUser: data
          })
        }
      })
    }

  }

  setCurrentUser = (user) => {
    localStorage.setItem("user_id", user.id)
    this.setState({
      currentUser: user
    })
  }



  render(){
    console.log(this.state)
    return (
        <div className="App">
          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" render={(routerProps) => { return <LoginForm  setCurrentUser={this.setCurrentUser} {...routerProps} />}} /> 
          <Route path="/signup" render={(routerProps) => { return <SignUpForm setCurrentUser={this.setCurrentUser} {...routerProps} />}} />
          </Switch>        
        </div>
    )
  }
}

export default App;
