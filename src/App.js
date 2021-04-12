import React, { useEffect } from "react";
import Header from './Header';
import SearchIcon from "@material-ui/icons/Search";
import Home from "./Home";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Checkout from "./Checkout";
import LogIn from "./LogIn";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is>>> ', authUser);
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })

      }else {
        dispatch({
          type: 'SET_USER',
          user:null
        })

      }

    })
   
  }, [])
  return (
    <Router>
       <div className="app">
       
         <Switch>
           <Route path="/login">
             <LogIn/>
           </Route>
           <Route path="/checkout">
           <Header/>
              
              <Checkout/>
           </Route>
           <Route path="/">
           <Header/>
              
              <Home/>
           </Route>

         </Switch>
      
      
      
      </div>
    </Router>
   
  );
}

export default App;
