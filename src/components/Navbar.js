import React from 'react'
import { NavLink } from 'react-router-dom' 

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="nabbar-brand">
            Asistente de Margaritina
        </div> 

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                    Notas
                </NavLink>
            </li>
            <li className="nav-item">    
                <NavLink className="nav-link" exact to="/calendar">  
                    Calendario
                </NavLink> 
            </li>
        </ul> 
    </nav> 
)