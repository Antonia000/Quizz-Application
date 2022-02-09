import React from 'react'
import '../index.css'
import Question from './Question'
import { nanoid } from 'nanoid'
import { Link } from "react-router-dom";
import Score from "./Score"

export default function Quiz() {
    const [questions, setQuestions]=React.useState([]);
    const [total, setTotal]=React.useState([]);
    let Total=[];
     React.useEffect(() => {fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium")
     .then((res) => res.json())
     .then((json) => {
         setQuestions(json.results)
     })},[])

     function makeTotal(){ 
      let score=0;
      Total.map(elem=>{
         elem===1 ? (score=score+1) : (score=score+0)
      })
      setTotal(score)
    } 
    function handleChange(total,answer){ 
      if(total.target.value === answer){
         Total.push(1);
         console.log(Total.length)        
      }
     else{    
        Total.push(0);
        console.log(Total.length)
      }
         if(Total.length === 10){makeTotal()}  
    }

    const allQuestions=questions.map( question => {
       return(
         <div>
           <Question key={nanoid()}
                     question={question.question}
                     answer={question.correct_answer}
                     badAnswers={question.incorrect_answers} 
                     handleChange={(obj,answer) => handleChange(obj,question.correct_answer)} 
                     points={0}   
                     />
           </div>
       )
     })  
  return (
    <div className="quiz">
      {allQuestions}
      <div className="finish">
        <Score total={total} />
      <Link to="/home" className="button">Play again</Link>
      </div>
    </div>
  );
}