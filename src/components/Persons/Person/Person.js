import React, {Component, Fragment} from 'react'
// import './Person.css';
import styled from 'styled-components'
import Aux from '../../../hoc/Auxiliary'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
//in plaats van <AuthContext.Consumer>
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElement.current.focus();
        console.log(this.context.authenticated)
    }

    render() {
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
                    {/*<AuthContext.Consumer>*/}
                    {/*    {(context) =>*/}
                    {/*        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>*/}
                    {/*    }*/}
                    {/*</AuthContext.Consumer>*/}
                    {this.context.authenticated? <p>Authenticated!</p> : <p>Please log in</p>}
                    <StyledDiv>
                        {/*<div className="Person" style={style}>*/}
                        <p onClick={this.props.click}>I'm a Person {this.props.name}! {this.props.age}</p>
                        <p>{this.props.children}</p>
                        <input
                            key="21"
                            // ref={(inputEl) => {this.inputElement = inputEl}}
                            ref={this.inputElement}
                            type={"text"}
                            onChange={this.props.changed}
                            value={this.props.name}
                        />
                    </StyledDiv>

                </Aux>
            </Fragment>
        );
    }
}

//handig voor lib te maken
Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};


export default Person;
