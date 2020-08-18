import React from 'react';
import './style.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth';
import WhiteBoard from './components/WhiteBoard/WhiteBoard';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';


/**
* Contains the routes for the four main components.
* Authentication Provider wraps the Routes.
*/

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/whiteboard' component={WhiteBoard} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
