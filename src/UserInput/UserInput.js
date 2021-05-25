import React from 'react'
import './UserInput.css';

const userInput = (props) => {
    return <input type="text" onChange={props.handler} value={props.userName}/>;
}
export default userInput;