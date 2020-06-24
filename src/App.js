import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import WhiteBoard from './components/WhiteBoard';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';
import { AuthProvider } from './Auth';


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
