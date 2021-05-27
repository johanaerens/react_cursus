import React from 'react'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) =>
    props.persons.map((person, index) => {
            return (
                <ErrorBoundary>
                    <Person
                        name={person.name}
                        age={person.age}
                        click={() => props.clicked(index)}
                        key={person.id}
                        changed={(event) => props.changed(event, person.id)}
                    />
                </ErrorBoundary>
            )
        }
    );

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

export default persons;
