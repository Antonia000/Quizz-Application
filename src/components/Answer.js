import React from 'react'
import '../index.css'
import {decode} from 'html-entities';

export default function Answer(props) {

  const style={
    backgroundColor: props.isHeld ? (props.value===props.rightAnswer ? '#94D7A2' : "#F8BCBC" ) : '',
    border: props.isHeld ? (props.value===props.rightAnswer ? '1px solid #94D7A2' : '1px solid #F8BCBC' ) : '1px solid #4D5B9E' 
  }
  return (
    <>
   {<input type="submit" value={decode(props.value)} onClick={()=>props.handleClick(props.id)} style={style}></input>}
    </>
  );
}
