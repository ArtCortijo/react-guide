import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  // this state property here is only available like this in components that extend components
  // We initialize it by assigning a value and this value is a Javascript object.
  state = {
    persons: [
      { name: 'Art', age: 36 },
      { name: 'Allie', age: 30 },
      { name: 'Sara', age: 31 },
    ],
  };

  switchNameHandler = () => {
    // Don't do this : this.state.persons[0].name = 'Pedro';
    // set state takes an object as an argument and it will merge whatever we define here with our existing state.
    // This will update only what was modified
    this.setState({
      persons: [
        { name: 'Pedro', age: 47 },
        { name: 'Allie', age: 30 },
        { name: 'Sara', age: 39 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hey you</h1>
        {/* The first part Switch Name is totally up to you but you typically use handler here to indicate that this is a method you're not actively calling but you're assigning as an event handler. This pattern is not required but it's not required */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: COD
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
