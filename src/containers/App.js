import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    // super will basically execute the constructor of the component you're extending to make sure that everything gets initialized correctly and you can do things like access this set state.
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asda', name: 'Max', age: 28 },
      { id: '32fw', name: 'Manu', age: 29 },
      { id: 'sdf3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: true,
  };

  // this method runs after the constructor. It's invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    // A good practice is to create a copy of your persons array before manipulating it and a simple way of doing this is by calling the slice method. Slice without arguments simply copies the full array and returns a new one
    // const persons = this.state.persons.slice();

    // or you can you use the spread operator
    const persons = [...this.state.persons];

    // *** You should always update state in an immutable fashion, so without mutating the original state first. ***

    // Splicing a person index and splice one element. This simply removes one element from the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((pers) => {
      return pers.id === id;
    });

    // The better approach is to create a new javascript object like this and then use this spread operator in front of the object I'm fetching. Just like with the array it's also available for objects and it will distribute all the properties of the object we fetch here into this new object we're creating here.
    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      // true/false toggle
      showPersons: !show,
    });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
