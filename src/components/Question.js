import React from 'react'
import '../index.css'
import Answer from './Answer'
import { nanoid } from 'nanoid'
import {decode} from 'html-entities';
import Score from "./Score"

export default function Question(props) {
    const rightAnswer=props.answer;
    const badAnswers=props.badAnswers;
    const[held,setIsHeld]=React.useState()
    const [point,setPoint]=React.useState(0)
    const [allAnswers,setAllAnswers]=React.useState(badAnswers);
    const [points,setPoints]=React.useState(props.points);

    React.useEffect(() => {
      setAllAnswers(prevAnswers =>[
        ...prevAnswers,
           rightAnswer
      ])
    },[])
     
    function handleClick(){
      setIsHeld(true)

    }
    const answers=allAnswers.map(ans => {
        return(
            <Answer 
            key={nanoid()}
            value={ans} 
            rightAnswer={rightAnswer} 
            isHeld={held}
            handleClick={handleClick}
            point={point}
            points={points}
           />
        )
        }) 
  return (
    <div className="questions">
        <h3>{decode(props.question)}</h3>  
        <div className="score-out-of-one">
        <div className="res" onClick={props.handleChange}>
          {answers}
        </div>
        </div>
    </div>
  );
}
