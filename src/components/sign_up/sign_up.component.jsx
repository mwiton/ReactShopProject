import React from 'react';
import './sign-up.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password1: '',
            displayName: ''
        }
    }

    render() {
        return <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name="displayName" type="text" value={this.state.displayName}
                           handleChange={this.handleChange} label='Display name' required/>
                <FormInput name="email" type="email" value={this.state.email}
                           handleChange={this.handleChange} label='Email' required/>
                <FormInput type='password' name="password" value={this.state.password}
                           handleChange={this.handleChange} label='Password' required/>
                <FormInput type='password' name="password1" value={this.state.password1}
                           handleChange={this.handleChange} label='Repeat password' required/>
                <CustomButton type='submit'>
                    Sign up
                </CustomButton>
            </form>
        </div>
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (this.state.password === this.state.password1){
            try {
                const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
                await createUserProfileDocument(user, { displayName: this.state.displayName});
                this.setState({
                    email: '',
                    password: '',
                    password1: '',
                    displayName: ''
                })
            } catch (e) {
                console.log("Error during creating new user", e.code, e.message);
            }
        }
        else {
            alert("Passwords don't match");
        }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value })
    };
}

export default SignUp;

