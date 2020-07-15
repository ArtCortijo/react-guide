import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: true,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({
      // true/false toggle
      showPersons: !show,
    });
  };

  render() {
    // Inline Style
    const style = {
      backgroundColor: 'beige',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Outputting lists */}
          {/* Map simply maps every element in a given array such as our persons array here into something else */}
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toogle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
