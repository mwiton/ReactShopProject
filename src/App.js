import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import Header from "./components/header/header.component";
import Sign_in_page from "./pages/sign_in_page/sign_in.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(promps) {
        super(promps);

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth = () => {};

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            await createUserProfileDocument(user);
            this.setState({currentUser: user});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/shop/' component={ShopPage} exact/>
                    <Route path='/shop/:category_name' component={ShopPage}/>
                    <Route path='/signin' component={Sign_in_page}/>
                </Switch>
            </div>
        );
    }
}

export default App;
