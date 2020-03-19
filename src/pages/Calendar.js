import React, { useState, useContext } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { MonthLink } from '../components/calendar/MonthLink'
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
                        render={() => <MonthLink array={state.february} month="February" />} />
                    <Route path={'/calendar/march'} exact 
                        render={() => <MonthLink array={state.march} month="March" />} />
                    <Route path={'/calendar/april'} exact 
                        render={() => <MonthLink array={state.april} month="April" />} />
                    <Route path={'/calendar/may'} exact 
                        render={() => <MonthLink array={state.may} month="May" />} />
                    <Route path={'/calendar/june'} exact 
                        render={() => <MonthLink array={state.june} month="June" />} />
                    <Route path={'/calendar/july'} exact 
                        render={() => <MonthLink array={state.july} month="July" />} />
                    <Route path={'/calendar/august'} exact 
                        render={() => <MonthLink array={state.august} month="August" />} />
                    <Route path={'/calendar/september'} exact 
                        render={() => <MonthLink array={state.september} month="September" />} />
                    <Route path={'/calendar/october'} exact 
                        render={() => <MonthLink array={state.october} month="October" />} />
                    <Route path={'/calendar/november'} exact 
                        render={() => <MonthLink array={state.november} month="November" />} />  
                    <Route path={'/calendar/december'} exact 
                        render={() => <MonthLink array={state.december} month="December" />} />
                </Switch>
            </div>
        )
    } else {
        return (
            <Redirect to={'/login'} />
        )
    }
}