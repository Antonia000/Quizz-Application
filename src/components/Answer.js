import React from 'react'
import '../index.css'
import {decode} from 'html-entities';

export default function Answer(props) {

    const styleForTrue={
        backgroundColor:'#94D7A2',
        border:'1px solid #94D7A2'
    }

    const styleForFalse={
      backgroundColor:'#F8BCBC',
      border:'1px solid #F8BCBC',
      color:'#293264'
    }
  return (
    <>
    {
    (props.isHeld&&props.rightAnswer===props.value)  ? 
    <input type="submit" value={decode(props.value)} onClick={props.handleClick} style={styleForTrue} points={props.points}></input>
    : (props.isHeld ? <input type="submit" value={decode(props.value)} onClick={props.handleClick} style={styleForFalse}></input> 
    :<input type="submit" value={decode(props.value)} onClick={props.handleClick} ></input>)
    }
    </>

  );
}
