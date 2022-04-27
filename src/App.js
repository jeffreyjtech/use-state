// use strict is not necessary inside of React modules because there's a transpiler, babel, interpreting our code before runtime.

import { useState, useEffect } from 'react';

import './App.css';
import DisplayPerson from './components/displayPerson/DisplayPerson';
import PersonForm from './components/PersonForm/PersonForm.js';
import People from './components/People';
import NotPeople from './components/NotPeople';

function App() {
  let [name, setName] = useState('Jacob');
  let [age, setAge] = useState(32);
  let [role, setRole] = useState('Instructor');

  let [showPeople, setShowPeople] = useState(true);
  let [showNotPeople, setShowNotPeople] = useState(false);

  useEffect(() => {
    console.log('Any kind of React event occurred!');
  })

  useEffect(() => {
    console.log('The component was mounted')
  }, [])

  useEffect(() => {
    console.log('The state "name" has been changed')
  }, [name])

  useEffect(() => {
    return () => console.log('This returned callback logs when component unmounts')
  })

  function togglePeople(e) {
    e.preventDefault();
    setShowPeople(!showPeople);
  }

  useEffect(() => {
    console.log('showPeople state changed. Showing notPeople now!')
    setShowNotPeople(!showPeople);
  }, [showPeople])
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
      {showPeople ? <People togglePeople={togglePeople}/> : null}
      {showNotPeople ? <NotPeople togglePeople={togglePeople}/> : null}
    </div>
  );
}

export default App;
