// use strict is not necessary inside of React modules because there's a transpiler, babel, interpreting our code before runtime.

import { useState } from 'react';

import './App.css';
import DisplayPerson from './components/displayPerson/DisplayPerson';
import PersonForm from './components/PersonForm/PersonForm.js';

function App() {
  let [name, setName] = useState('Jacob');
  let [age, setAge] = useState(32);
  let [role, setRole] = useState('Instructor');

  // setPerson({ name: 'Jacob' }); // Mutation of state to a new thing, like changing it's data type
  // Try not do this, ESPECIALLY in the children

  // Always create a function for mutating state consistently
  function updatePerson(person) {
    // This function enforces a type-check before re-assigning state.
    if (typeof person !== 'object' && !Array.isArray(person)) {
      console.error('Please provide a valid object');
      return;
    }

    let { name, age, role } = person;

    if (typeof name === 'string') {
      setName(name);
    }
    if (typeof age === 'number') {
      setAge(age);
    }
    if (typeof role === 'string') {
      setRole(role);
    }
  }

  return (
    <div className="App">
      <DisplayPerson person={{ name, age, role }} />
      <PersonForm onSubmit={updatePerson} />
    </div>
  );
}

export default App;
