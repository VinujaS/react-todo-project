import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import "./functionBased/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./functionBased/components/Navbar";
import { HashRouter } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Navbar />
            <Routes>
                <Route exact path = "/" element={<TodoContainer/>} />
                <Route path = "/about/*" element={<About/>} />
                <Route path = "*" element={<NotMatch/>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>, 
    document.getElementById("root")
)