import React from 'react';
import './log_in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle, auth} from "../../firebase/firebase.utils";

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return <div className='log_in'>
            <h2 className='title'>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" value={this.state.email}
                       handleChange={this.handleChange} label='Email' required/>
                <FormInput type='password' name="password" value={this.state.password}
                       handleChange={this.handleChange} label='Password' required/>
                <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign in
                    </CustomButton>
                    <CustomButton customClass='google-sign-in' onClick={signInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (e) {
            console.error(e.message);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value })
    };
}

export default LogIn;
