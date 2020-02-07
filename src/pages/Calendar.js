import React, { useState } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { February } from '../components/months/February'
import { March } from '../components/months/March'
import { April } from '../components/months/April'
import { May } from '../components/months/May'
import { June } from '../components/months/June'

export const Calendar = ({state}) => {
    const [dropState, setDropState] = useState({dropDown: false})

    const change = () => {
        setDropState(dropState => ({...dropState, dropDown: !dropState.dropDown}))
    }
    let dropDownClass = `dropdown-menu ${dropState.dropDown ? 'show' : ''}`
    let btnGroup = `btn-group ${dropState.dropDown ? 'show' : ''}`

    return (
        <div className="Calendar">

            <div className={btnGroup}>
                <button onClick={change.bind(null)}
                    className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Large button
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
                </div>
            </div>


            <Switch>
                <Route path={'/calendar/february'} exact 
                    render={() => <February array={state.february} />} />
                <Route path={'/calendar/march'} exact 
                    render={() => <March array={state.march} />} />
                <Route path={'/calendar/april'} exact 
                    render={() => <April array={state.february} />} />
                <Route path={'/calendar/may'} exact 
                    render={() => <May array={state.february} />} />
                <Route path={'/calendar/june'} exact 
                    render={() => <June array={state.february} />} />
            </Switch>
        </div>
    )
}