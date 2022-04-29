import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from "./functionBased/components/TodoContainer"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import "./functionBased/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./functionBased/components/Navbar";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path = "/" element={<TodoContainer/>} />
                <Route path = "/about/*" element={<About/>} />
                <Route path = "*" element={<NotMatch/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById("root")
)