import React, {Component} from 'react'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";
// import classes from "./Persons.module.css";
import withClass from "../../hoc/withClass"

// PureComponent zal alle props controleren shouldComponentUpdate
class Persons extends Component {
    render() {
        console.log("persons.js rendering")
        return this.props.persons.map((person, index) => {
                return (
                    <ErrorBoundary>
                        <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.props.clicked(index)}
                            key={person.id}
                            changed={(event) => this.props.changed(event, person.id)}
                        />
                    </ErrorBoundary>
                )
            }
        );
    }

    // componentWillUnmount() {
    //     console.log("unmount clean up")
    // }

    // static getDirivedStateFromProps(props, state) {
    //     console.log("getDirivedStateFromProps")
    //     return state;
    // }

    //niet meer gebruiken ikv PureComponent
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     const shouldUpdate = nextProps.persons !== this.props.persons;
    //     console.log("shouldComponentUpdate: " + shouldUpdate);
    //     return shouldUpdate;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate");
    //     return {message: 'snapshot'};
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("componentDidUpdate");
    //     console.log(snapshot);
    // }
}

export default withClass(Persons, "Persons");