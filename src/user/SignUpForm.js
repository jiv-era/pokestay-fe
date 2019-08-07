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
        .then((newData) => {
            if(newData.errors){
                alert(newData.errors)
            } else {
                this.props.setCurrentUser(newData)
            }
        })
    }

    handleSubmit = () => {
        if(this.state.password === this.state.passwordConfirmation){
            this.newUser()
            this.props.history.push('/home')
        } else {
            alert('Passwords do not match!')
        } 
    }


    render(){
        return(
                <div className="user-signup">
                    <Form id='signup-form' onSubmit={this.handleSubmit}>
                        <img  src="../signuplogo3.png" alt="signuplogo" />
                        <img  src="../oakpn22.png" alt="oak" />
                        
                        <Form.Field>
                            <input onChange={this.handleChange} name="username" value={this.state.username} placeholder="Username" required/>
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.handleChange} name="profile_pic" value={this.state.profile_pic} placeholder="Profile Pic URL" required/>
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder="Password" required/>
                        </Form.Field>
                        <Form.Field>
                            <input onChange={this.handleChange} type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} placeholder="Confirm Password" required/>
                        </Form.Field>
                        
                        <Button type="submit">Submit</Button>
                        <br />
                        <p id="p-login">If you already have an account, please <a href='/login'>log in now.</a></p>
                    </Form>
                <footer>
                    <h3>© 2019 Pokémon</h3>
                </footer>
                </div>
        )
    }

}


export default SignUpForm;