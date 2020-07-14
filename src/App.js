// useState is the hook that allows us to manage state in a functional component.
import React, { useState } from 'react';
import Person from './Person/Person';

import './App.css';

const App = (props) => {
  // useState returns an array with exactly two elements and always two elements
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Art', age: 36 },
      { name: 'Steve', age: 30 },
      { name: 'Jason', age: 31 },
    ],
    // otherState: 'some other value',
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Pedro', age: 47 },
        { name: 'Allie', age: 30 },
        { name: 'Sara', age: 39 },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hey you</h1>
      {/* Because we're no longer inside of a class anymore, the keyword this (from this.switchNameHandler is no longer necessary) */}
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobbies: COD
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
