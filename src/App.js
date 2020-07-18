import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

// Because StyledButton is a template literal, we can include a condition in the styles
const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? 'red' : 'green')};
  color: white;
  font: inherit;
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asda', name: 'Max', age: 28 },
      { id: '32fw', name: 'Manu', age: 29 },
      { id: 'sdf3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: true,
  };

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
    // Inline Style
    const style = {
      backgroundColor: 'beige',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Outputting lists */}
          {/* Map simply maps every element in a given array such as our persons array here into something else */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'lightred',
      //   color: 'black',
      // };
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toogle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
