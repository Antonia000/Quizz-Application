import React from 'react'
import '../index.css'
import Question from './Question'
import { nanoid } from 'nanoid'
import { Link } from "react-router-dom";
import Score from "./Score"

export default function Quiz() {
    const [questions, setQuestions]=React.useState([]);
    let Total=[]  
    let score=0;

     React.useEffect(() => {fetch("https://opentdb.com/api.php?amount=10&category=22&difficulty=medium")
     .then((res) => res.json())
     .then((json) => {
         setQuestions(json.results)
     })},[])

    function handleChange(total,answer){ 
      score=0;
      if(total.target.value === answer){
         Total.push(1);       
      }
     else{    
        Total.push(0);
      }     
      Total.map(elem=>{
         return elem===1 ? (score=score+1) : (score=score+0)
      })
    }
    function handleClick(){
      if(Total.length === 10){
        return score
        }
        if(Total.length > 10){
          return "choose only one answer"
        }
        else{
          return "uncomplete"
        }
    }
    const allQuestions=questions.map( question => {
       return(
         <div>
           <Question key={nanoid()}
                     question={question.question}
                     answer={question.correct_answer}
                     badAnswers={question.incorrect_answers} 
                     handleChange={(obj) => handleChange(obj,question.correct_answer)} 
                     points={0}   
                     />
         </div>
       )
     })  

  return (
    <div className="quiz">
      {allQuestions}
        <div className="finish">
          <Score score={score} handleClick={handleClick}/>
          <Link to="/home" className="button">Play again</Link>
        </div>
    </div>
  );
}
