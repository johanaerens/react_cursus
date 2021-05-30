import React, {useEffect} from 'react'
import styled from "styled-components";

const Cockpit = (props) => {
    // useEffect(()=>{
    //     console.log("useEffect");
    //     setTimeout(()=> alert("test"),1000)
    //     //htpp requests
    // },[props.persons]); ==> wordt uitgevoerd als de persons worden aangepast

    useEffect(() => {
        console.log("useEffect");
        const timer = setTimeout(() => alert("test"), 1000);
        return () => {
            clearTimeout(timer);
            console.log("cleanup useeffect");
        }
        //htpp requests
    }, []); //enkel eerste keer

    useEffect(() => { //draait altijd en doet een cleanup
        console.log("useEffect2");
        return () => {
            console.log("cleanup useeffect2")
        }
    })

    const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;
    const stylingClasses = [];
    if (props.personsLength <= 2) {
        stylingClasses.push("red")
    }
    if (props.personsLength <= 1) {
        stylingClasses.push("bold")
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={stylingClasses.join(' ')}>styling</p>
            <StyledButton
                alt={props.showDiv}
                onClick={props.clicked.bind(this, 'newName')}>
                switch name
            </StyledButton>
        </div>
    );
}

export default React.memo(Cockpit); //enkel als er wijzigingen zijn zal dit uitgevoerd worden