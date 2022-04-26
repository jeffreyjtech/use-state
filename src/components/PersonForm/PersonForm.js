import { useState } from "react";

function PersonForm({ onSubmit }) {

  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a single-input form, the input variable contains the string typed into the input element
    console.log(name);
    onSubmit({ name, age: parseInt(age), role })
  }

  const onChange = (e) => {
    let {name, value} = e.target;
    switch (name) {
      case 'name': setName(value); break;
      case 'age': setAge(value); break;
      case 'role': setRole(value); break;
      default:
    }
  }

  return (
    <form onSubmit={handleSubmit} id="person-form">
      <input name="name" onChange={onChange} data-testid="name-input"/>
      <input name="age" onChange={onChange} data-testid="age-input"/>
      <input name="role" onChange={onChange} data-testid="role-input"/>
      <button type="submit" data-testid="submit-button">Submit</button>
    </form>
  )
}

export default PersonForm;