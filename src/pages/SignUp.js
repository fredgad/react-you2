import React, { useCallback } from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import app from '../context/firebase/base'
import s from './LoginAndSignUp.module.scss' 

const SignUp = ({history}) => { 
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/')
        }
        catch(error) {
            alert(error)
        }
    }, [history])

    return (
        <div className={s.registration}>
            <NavLink className="nav-link" exact to="/login">Login</NavLink>
            <h2>SignUp</h2>
            <form onSubmit={handleSignUp}> 
                <label>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    <p>Password</p>
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
 
export default withRouter(SignUp)