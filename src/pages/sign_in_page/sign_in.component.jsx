import React from 'react';
import './sign_in.styles.scss'
import LogIn from "../../components/log_in/log_in.component";
import SignUp from "../../components/sign_up/sign_up.component";

const Sign_in_page = () => (
    <div className='sign_in'>
        <LogIn/>
        <SignUp/>
    </div>
);

export default Sign_in_page;
