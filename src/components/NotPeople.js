import { useEffect } from 'react';

function NotPeople({togglePeople}) {

  useEffect(() => () => console.log('NotPeople has unmounted'));

  return (
    <section>
      NotPeople
      <button onClick={togglePeople}>
        Click to unmount
      </button>
    </section>
  )
}

export default NotPeople;