import React from 'react'
import { Link } from "react-router-dom";
import Home from './components/Home'

export default function App() {
  return (
    <div>
        <Link to="/home" element={ <Home/> }>Home</Link>
    </div>
  );
}

