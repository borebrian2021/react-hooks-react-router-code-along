import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"
import Login from "./Components/Login"

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function App() {
  return (
   <div>
    <NavBar />

       <Switch>
      
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
      </div>
  );
}

function NavBar() {
  return (
    <div>
<NavLink 
 style={linkStyles}
 exact
/* add prop for activeStyle */
activeStyle={{
background: "darkblue",
 }} to="/">Home
  </NavLink>
  <NavLink 
 style={linkStyles}
 exact
/* add prop for activeStyle */
activeStyle={{
background: "darkblue",
 }} to="/About">
  About
  </NavLink>

  <NavLink 
 style={linkStyles}
 exact
/* add prop for activeStyle */
activeStyle={{
background: "darkblue",
 }} to="/Login">
Login
  </NavLink>
    </div>
      )}
  
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root")
);
