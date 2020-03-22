import React, { useState, useContext } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { MonthLink } from '../components/calendar/MonthLink'
import { AuthContext } from '../context/firebase/Auth'

export const Calendar = React.memo(({state}) => {
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
                        {Object.keys(state).map(el => (
                            <NavLink key={el} onClick={change.bind(null)}
                            className="dropdown-item"
                            exact to={`/calendar/${el}`}>
                                {`${el[0].toUpperCase()}${el.slice(1)}`}
                            </NavLink>
                        ))}
                    </div> 
                </div>
                <Switch> 
                    {Object.keys(state).map(el => (
                        <Route key ={el} path={`/calendar/${el}`} exact  
                            render={() => <MonthLink array={state[el]} month={`${el[0].toUpperCase()}${el.slice(1)}`} />} />
                    ))}
                </Switch>
            </div>
        )
    } else {
        return (
            <Redirect to={'/login'} />
        )
    }
})