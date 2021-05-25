import React from 'react'
import './Person.css';
const person = (props) => {
    const style= {
        // '@media (min-with:500px':{
        //     width:'450px'
        // }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a Person {props.name}! {props.age}</p>
            <p>{props.children}</p>
            <input type={"text"} onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;
