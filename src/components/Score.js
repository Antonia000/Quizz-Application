import React from 'react'
import '../index.css'
import Confetti from 'react-confetti'

export default function Score(props) {

    return (
        <>
          {props.total > 4 && <Confetti  width={1500} height={1300} numberOfPieces={700} /> }
          <p className="score">You scored {props.total} / 10 correct answers</p>
        </>
    )
}