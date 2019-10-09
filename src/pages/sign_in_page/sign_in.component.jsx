import React from 'react';
import './sign_in.styles.scss'
import LogIn from "../../components/log_in/log_in.component";
import SignUp from "../../components/sign_up/sign_up.component";

const SignInPage = () => (
    <div className='sign_in'>
        <LogIn/>
        <SignUp/>
    </div>
);

export default SignInPage;
