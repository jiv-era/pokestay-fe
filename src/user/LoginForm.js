import React from 'react';
import { Form, Button } from 'semantic-ui-react'


class LoginForm extends React.Component {

    state = {
        username: "",
        password: "",
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleSubmit = () => {
        fetch(`http://localhost:3000/api/v1/login`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            if(data.errors){
                alert(data.errors)
            } else {
                this.props.setCurrentUser(data)
                this.props.history.push('/home')
            }
        }); 
    }





    render() {
        return(
            <div className="user-login">
                <Form id='login-form' onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input onChange={this.handleChange} name="username" value={this.state.username} placeholder="Username" required/>
                    </Form.Field>
                    <Form.Field>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password"  required/>
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                    <br/>
                    <br/>
                    <a href="/signup">Not a Member?</a>
                </Form>
                <footer>
                    <h3>©Copyright 2019</h3>
                </footer>
            </div>
        )
    }

}


export default LoginForm;

  