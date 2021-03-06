
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore} from'redux'
import { Provider } from "react-redux";

import { AuthProvider } from "./context/auth";
import AuthRoute from './util/AuthRoute';

import './App.css';
import reducer from './redux/reducer'
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Register from './pages/Register';
import UsersPage from './pages/UserPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Donations from './pages/Donations';


 function App() {

  const initialState = {
    posts: [],
    user: null
  }

  const store = createStore(reducer, initialState);

  return (
    
    <AuthProvider ClassName="App">
      <div className="main-content">
          <Provider store={store}>
          <Router>
            
              <MenuBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/users" component={UsersPage} />
              <AuthRoute exact path="/login" component={Login} />
              <AuthRoute exact path="/register" component={Register} />
              <Route exact path="/profile/:username" component={Profile}/>
              <Route exact path = "/Donations/:username" component = {Donations}/>
          </Router>
        </Provider>
     </div>
    </AuthProvider>
  );
}

export default App