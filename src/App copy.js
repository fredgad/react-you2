import React from 'react'
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom'
import PrivateRoute from './context/firebase/PrivateRoute'
import './App.scss'
import { Home } from './pages/Home'
import { Calendar } from './pages/Calendar' 
import { Navbar } from './components/navbar/Navbar'
import { Alert } from './components/common/alert/Alert'
import { AlertState } from './context/alert/AlertState'
import { FirebaseState } from './context/firebase/FirebaseState' 
import { AuthProvider } from './context/firebase/Auth'
import { Weather } from './pages/Weather'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App({state}) {

  return (
    <AuthProvider>
      <FirebaseState>
        <AlertState>
          <BrowserRouter>
          <Navbar />
            <div className="container pt-4">
              <Route path={'/'} exact component={Alert} />
              <Switch> 
                <PrivateRoute path="/" exact component={Home} /> 
                <Route path="/calendar" render={() => <Calendar state={state} />} />
                <PrivateRoute path='/weather' component={Weather} />
                <Route path={'/login'} exact render={() => <Login />} />
                <Route path={'/signup'} exact render={() => <SignUp />} /> 
                <Route path="/" render={() => <Login />} />  
              </Switch> 
            </div>
          </BrowserRouter>
        </AlertState> 
      </FirebaseState>
    </AuthProvider> 
  );
}

export default App;
