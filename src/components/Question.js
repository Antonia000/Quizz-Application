import React from 'react'
import Answer from './Answer'
import { nanoid } from 'nanoid'
import {decode} from 'html-entities';
import '../index.css'

export default function Question(props) {
    const rightAnswer=props.answer;
    const badAnswers=props.badAnswers;
    const[answers,setAnswers]=React.useState()
    const [allAnswers,setAllAnswers]=React.useState(badAnswers);

    const [done,setDone]=React.useState(false);

    React.useEffect(() => {
      setAllAnswers(prevAnswers =>[
        ...prevAnswers,
           rightAnswer    
      ])
      setDone(true) 
    },[])
    React.useEffect(() => {
      setAnswers(()=>{
        const all=allAnswers.map(ans => {
                return{
                  id:nanoid(),
                  value:ans,
                  rightAnswer:rightAnswer,
                  isHeld:false
                }})
                return all
          })
    },[done])

    function handleClick(id){ 
      setAnswers(oldAnswers => oldAnswers.map(ans => {
          return ans.id === id ? {...ans, isHeld: !ans.isHeld} :  ans
        }))}

      const displayedAnswers= answers ? answers.map(ans => {
        return(
          <Answer key={nanoid()}
                  id={ans.id}
                  value={ans.value}
                  rightAnswer={ans.rightAnswer} 
                  isHeld={ans.isHeld}
                  handleClick={handleClick}
                  point={ans.point}
                  
          />
          )}) : ""

  return(
    <div className="questions">
        <h3>{decode(props.question)}</h3>  
        <div className="res" onClick={props.handleChange}>
           {displayedAnswers}
        </div>
    </div>
  );
}
