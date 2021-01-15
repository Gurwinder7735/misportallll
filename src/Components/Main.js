import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import "./Main.css"
import Action from './ActionComponent'

import { setUser } from "../redux/action";

import { useDispatch,useSelector } from "react-redux";


function Main() {


    const dispatch = useDispatch()


    return (
        <div className="main">
            <Switch>
            <Route exact path="/action/:id" component={Action}>            
            </Route>  
          </Switch>
        </div>
    )
}

export default Main
