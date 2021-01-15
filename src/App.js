import React from "react"
import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login"

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";

import { getData } from "./redux/action";




function App() {

const {user,token,data} = useSelector(state => state)
const dispatch = useDispatch()
console.log(user);
console.log(data);


  React.useEffect(()=>{
       if(user){
         console.log(token);
        dispatch(getData(user,token))
       }
  },[token])


    if(user){

        return (
            <div className="App">
              <Router>
              <Navbar/>
              <div className="wrapper">
                <Sidebar/>
                <Main/>
              </div>
              </Router>
            </div>
          );
        }else{
          return <Login/>
        }

}

 

export default App;
