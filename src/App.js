import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import {Component} from "react";

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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        let div = <>{this.state.showDiv === true ? <div>
            <p>qsdfqdsf</p>
        </div> : null}</>;

        return (
            <div className="App">
                <h1>Hi, I'm a react app2</h1>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'newName')}>
                    switch name
                </button>

                {this.state.persons.map((person, index) => {
                    return (
                        <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}


                        />
                    )
                })}

                {/*<Person*/}
                {/*    name={this.state.persons[0].name}*/}
                {/*    age={this.state.persons[0].age}*/}
                {/*    click={() => this.switchNameHandler('newName1')}*/}
                {/*/>*/}

                {/*<Person*/}
                {/*    name={this.state.persons[1].name}*/}
                {/*    age={this.state.persons[1].age}*/}
                {/*    click={this.switchNameHandler.bind(this, 'newName2')}*/}
                {/*    changed={this.nameChangedHandler}*/}
                {/*>*/}
                {/*    helloowkes*/}
                {/*</Person>*/}
                {/*<Person*/}
                {/*    name={this.state.persons[2].name}*/}
                {/*    age={this.state.persons[2].age}*/}
                {/*    click={this.switchNameHandler.bind(this, 'newName3')} //bind is beter dan () =>*/}
                {/*/>*/}

                <UserInput handler={this.userNameChangedHandler} userName={this.state.userName}/>
                <UserOutput userName={this.state.userName}/>

                {div}


                <button onClick={this.toggleDiv}>showdiv</button>
            </div>
        );
    }
}

export default App;
