import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
// import { Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      {/* <Link to="/hello">Hello World</Link> | <Link to="/Labs/a3">Labs</Link> | 
      <Link to="/Kanbas/*">Kanbas</Link> | */}
      <div className='.container-left-align'>
        <Routes>
          <Route path="/" element={<Navigate to="/labs/a3" />} />
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
