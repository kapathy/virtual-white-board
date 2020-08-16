import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth';
import WhiteBoard from './components/WhiteBoard/WhiteBoard';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

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
