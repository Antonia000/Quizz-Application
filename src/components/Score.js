import React from 'react'
import '../index.css'
import Confetti from 'react-confetti'

export default function Score(props) {
  const [finish,setFinish]=React.useState(false)
  const [score,setScore]=React.useState()
    return (
        <>
          {score > 4 && <Confetti  width={1500} height={1300} numberOfPieces={700} /> }
          <button onClick={()=>{
            setScore(props.handleClick())
            setFinish(true)
          }} className="button">Score</button> 
          {finish ? <p className="score" >You scored {score} / 10 correct answers</p> : ""}
        </>
    )
}

