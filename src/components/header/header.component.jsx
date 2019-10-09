import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import './header.styles.scss'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {changeCartVisibility} from "../../redux/shop/shop.actions";

const Header = ({currentUser, changeCartVisibility}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='Logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser
                ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <div onClick={changeCartVisibility}>
                <CartIcon/>
            </div>
        </div>
        <CartDropdown/>
    </div>
);

const mapStateToProps = state => ({
     currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    changeCartVisibility: () => dispatch(changeCartVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);