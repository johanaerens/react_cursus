import React from 'react'
import styled from "styled-components";

const cockpit = (props) => {
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
    if (props.persons.length <= 2) {
        stylingClasses.push("red")
    }
    if (props.persons.length <= 1) {
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

export default cockpit;