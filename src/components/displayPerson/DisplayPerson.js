
function DisplayPerson({ person }) {
  let { age, name, role } = person;

  return (
    <div>
      <h3 data-testid="person-name">{name}</h3>
      <h3 data-testid="person-age">{age}</h3>
      <h3 data-testid="person-role">{role}</h3>
    </div>
  )
}

export default DisplayPerson