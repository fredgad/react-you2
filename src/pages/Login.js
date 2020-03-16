import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import { NavLink } from 'react-router-dom'
import app from '../context/firebase/base'
import { AuthContext } from '../context/firebase/Auth'
import s from './LoginAndSignUp.module.scss'

console.log(AuthContext)
const Login = ({history}) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push('/')
        }
        catch(error) {
            alert(error)
        }
    }, [history])

    const { currentUser } = useContext(AuthContext)

    if(currentUser) {
        return <Redirect to="/" /> 
    }

    return (
        <div className={s.registration}> 
            <NavLink className="nav-link" exact to="/signup">Sign Up</NavLink>
            <h2>Authorisation</h2>
            <form onSubmit={handleLogin}>
                <label>
                    <p>Email</p>
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    <p>Password</p>
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">Login</button> 
            </form>
        </div>
    )
}
 
export default withRouter(Login)  