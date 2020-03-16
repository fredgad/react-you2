import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import daisy from '../img/daisy.png' 
import s from './Navbar.module.scss'
import { AuthContext } from '../context/firebase/Auth'
import SignOut from '../context/firebase/SignOut'

export const Navbar = () => { 
    const {currentUser} = useContext(AuthContext)
    let userEmail = ''
    if(currentUser) {
        userEmail = currentUser.email
        console.log(userEmail)
    }

    const currentMonth = new Date().getMonth(),
          months = ['december', 'february', 'march', 'april', 'may', 'june',
            'july', 'august', 'september', 'october', 'november', 'december']
    if(currentUser) {
        return (
            <nav className={s.nav + " navbar navbar-dark navbar-expand-lg"}>
                <SignOut /> 
                <div className="container" > 
                    <div className="navbar-brand">
                        <img src={daisy} alt="daisy"/>
                        <h5>
                            <span style={{color: '#FE4C80'}}>User</span>:
                            {userEmail}
                        </h5>
                    </div> 
            
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Notes
                            </NavLink>
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" exact to={`/calendar/${months[currentMonth]}`}>  
                                Calendar
                            </NavLink> 
                        </li>
                        <li className="nav-item">    
                            <NavLink className="nav-link" to={`/weather`}>  
                                Weather
                            </NavLink> 
                        </li>
                    </ul> 
                </div>
            </nav> 
        )
    } else {
        return (
        <div className="navbar-brand">
            <img src={daisy} alt="daisy"/>
            <h1>Asistent Margarita</h1> 
        </div>
        )
    }
}
