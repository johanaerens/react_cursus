import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import UserInput from '../components/UserInput/UserInput'
import UserOutput from '../components/UserOutput/UserOutput'
import {Component} from "react";
// import styled from 'styled-components'


class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'max1', age: 21},
            {id: '2', name: 'max2', age: 22},
            {id: '3', name: 'max3', age: 23}
        ],
        userName: 'supermax',
        showDiv: false
    }
    userNameChangedHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {id: '1', name: newName, age: 21},
                {id: '2', name: 'max5', age: 22},
                {id: '3', name: 'max6', age: 23}
            ]
        });
    }
    nameChangedHandler = (event, id) => {
        const persons = this.state.persons;
        const personIndex = persons.findIndex(p => {
            return p.id === id
        })
        const person = {...persons[personIndex]}; //deep copy spread operator
        // const person = Object.assign({},this.state.persons[personIndex])//wordt eigenlijk niet gebruikt maar is een alternatief
        person.name = event.target.value;
        persons[personIndex] = person;
        this.setState({persons: persons})
    }

    deletePersonHandler = (personIndex) => {
        // const personsTemp = this.state.persons.slice(); //slice deep copy
        const personsTemp = [...this.state.persons] //deep copy
        personsTemp.splice(personIndex, 1)
        this.setState({persons: personsTemp});
    }

    toggleDiv = () => {
        this.setState({
            showDiv: !this.state.showDiv
        })
    }

    render() {
        // const style = {
        //     backgroundColor: 'green',
        //     font: 'inherit',
        //     border: '1px solid blue',
        //     padding: '8px',
        //     cursor: 'pointer',
        //     ':hover': {
        //         backgroundColor: 'lightgreen',
        //         color:'black'
        //     }
        // }

        let div = null;
        if (this.state.showDiv) {
            div = (
                <div>
                    <p>qsdfqdsf</p>
                </div>
            )
            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            //     color: 'black'
            // }
        }


        return (
            <div className="App">
                <Cockpit appTitle={this.props.appTitle}
                         persons={this.state.persons}
                         clicked={this.switchNameHandler}
                         showDiv={this.state.showDiv}/>
                <Persons persons={this.state.persons}
                         clicked={this.deletePersonHandler}
                         changed={this.nameChangedHandler}
                />

                <UserInput handler={this.userNameChangedHandler} userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>

                {div}

                <button onClick={this.toggleDiv}>showdiv</button>
            </div>
        );
    }
}

export default App;
