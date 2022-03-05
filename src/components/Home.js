import React from 'react'
import '../index.css'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
        <h1>Quizzical</h1>
        <p>Simple quiz developed with React js</p>
        <Link to="/quiz" className="button">Start Quiz</Link>
    </div>
  );
}