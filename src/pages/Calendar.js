import React, { useState, useContext } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { February } from '../components/months/February'
import { March } from '../components/months/March'
import { April } from '../components/months/April'
import { May } from '../components/months/May'
import { June } from '../components/months/June'
import { July } from '../components/months/July'
import { August } from '../components/months/August'
import { September } from '../components/months/September'
import { October } from '../components/months/October'
import { November } from '../components/months/November'
import { December } from '../components/months/December'
import { AuthContext } from '../context/firebase/Auth'
import { AlertContext } from '../context/alert/alertContext'

export const Calendar = ({state}) => {
    const alert = useContext(AlertContext)
    const [dropState, setDropState] = useState({dropDown: false})
    const {currentUser} = useContext(AuthContext)

    const change = () => {
        setDropState(dropState => ({...dropState, dropDown: !dropState.dropDown}))
    }

    let dropDownClass = `dropdown-menu ${dropState.dropDown ? 'show' : ''}`
    let btnGroup = `btn-group ${dropState.dropDown ? 'show' : ''}`
    if(currentUser) {
        return (
            <div className="Calendar">
                <div className={btnGroup}>
                    <button onClick={change.bind(null)}
                        className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select month
                    </button>
    
                    <div className={dropDownClass}>
                        <NavLink onClick={change.bind(null)}
                        className="dropdown-item"
                        exact to="/calendar/february">
                            February
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/march">
                            March
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/april">
                            April
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/may">
                            May
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/june">
                            June
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/july">
                            July
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/august">
                            August
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/september">
                            September
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/october">
                            October
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/november">
                            November
                        </NavLink>
                        <NavLink onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to="/calendar/december">
                            December
                        </NavLink>
                    </div>
                </div>
    
    
                <Switch>
                    <Route path={'/calendar/february'} exact 
                        render={() => <February array={state.february} />} />
                    <Route path={'/calendar/march'} exact 
                        render={() => <March array={state.march} />} />
                    <Route path={'/calendar/april'} exact 
                        render={() => <April array={state.april} />} />
                    <Route path={'/calendar/may'} exact 
                        render={() => <May array={state.may} />} />
                    <Route path={'/calendar/june'} exact 
                        render={() => <June array={state.june} />} />
                    <Route path={'/calendar/july'} exact 
                        render={() => <July array={state.july} />} />
                    <Route path={'/calendar/august'} exact 
                        render={() => <August array={state.august} />} />
                    <Route path={'/calendar/september'} exact 
                        render={() => <September array={state.september} />} />
                    <Route path={'/calendar/october'} exact 
                        render={() => <October array={state.october} />} />
                    <Route path={'/calendar/november'} exact 
                        render={() => <November array={state.november} />} />
                    <Route path={'/calendar/december'} exact 
                        render={() => <December array={state.december} />} />
                </Switch>
            </div>
        )
    } else {
        return (
            <Redirect to={'/login'} />
        )
    }
}