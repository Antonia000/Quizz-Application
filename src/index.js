import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''}>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home/> } />
      <Route path="/quiz" element={<Quiz/> } />
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);


