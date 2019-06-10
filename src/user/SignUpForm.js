import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class SignUpForm extends React.Component{

    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        profile_pic: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    newUser = () => {
        fetch(`http://localhost:3000/api/v1/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    handleSubmit = () => {
        if(this.state.password === this.state.passwordConfirmation){
            this.newUser()
        } else {
            alert('Passwords do not match!')
        } 
    }




    render(){
        return(
            <div className="wrapper">
                <div className="user-signup">
                    <Form id='signup-form' onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <input onChange={this.handleChange} name="username" value={this.state.username} placeholder="Username" />
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.handleChange} name="profile_pic" value={this.state.profile_pic} placeholder="Profile Pic" />
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password" />
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder="Confirm Password" />
                        </Form.Field>
                        
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }

}


export default SignUpForm;