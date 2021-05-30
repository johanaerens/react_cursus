import React,{Fragment} from 'react'
// import './Person.css';
import styled from 'styled-components'
import Aux from '../../../hoc/Auxiliary'

const person = (props) => {
    // const random=Math.random();
    // if(random>0.7){
    //     throw new Error("errorororor");
    // }
    // const style = {
    //     // '@media (min-with:500px':{
    //     //     width:'450px'
    //     // }
    // }
    const StyledDiv = styled.div`
            width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px #ccc;
    padding: 16p;
    text-align: center;
         '@media (min-with:500px':{
             width:'450px'
         }    
        `;
    return (
        //fragment is hetzelfde als ons Aux element maar van React zelf
        <Fragment>
            <Aux>
                <StyledDiv>
                    {/*<div className="Person" style={style}>*/}
                    <p onClick={props.click}>I'm a Person {props.name}! {props.age}</p>
                    <p>{props.children}</p>
                    <input type={"text"} onChange={props.changed} value={props.name}/>
                </StyledDiv>
            </Aux>
        </Fragment>
    );
}

export default person;
