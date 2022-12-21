import { useEffect } from 'react';

function People({togglePeople}) {

  useEffect(() => () => console.log('People has unmounted'));

  return (
    <section>
      People
      <button onClick={togglePeople}>
        Click to unmount
      </button>
    </section>
  )
}

export default People;