import React from 'react'
import { NavLink } from 'react-router-dom'
import daisy from '../img/daisy.png' 
import s from './Navbar.module.scss'

export const Navbar = () => { 
    const currentMonth = new Date().getMonth(),
          months = ['december', 'february', 'march', 'april', 'may', 'june',
            'july', 'august', 'september', 'october', 'november', 'december']

    return (<nav className={s.nav + " navbar navbar-dark navbar-expand-lg"}>
            <div className="navbar-brand">
                <img src={daisy} alt="daisy"/>
                Asistente de Margaritina
            </div> 
    
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                        Notas
                    </NavLink>
                </li>
                <li className="nav-item">    
                    <NavLink className="nav-link" exact to={`/calendar/${months[currentMonth]}`}>  
                        Calendario
                    </NavLink> 
                </li>
                <li className="nav-item">    
                    <NavLink className="nav-link" to={`/weather`}>  
                        Weather
                    </NavLink> 
                </li>
            </ul> 
        </nav> 
    )
}
