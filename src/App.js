import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Home } from './pages/Home'
import { Calendar } from './pages/Calendar' 
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'
import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState'

function App({state}) {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Route path={'/'} exact component={Alert} />
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/calendar'} render={() => <Calendar state={state} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
