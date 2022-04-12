import { useState } from 'react';

export default function Home() {

  const [name, setName] = useState('mario');

  const handleClick = (name) => (setName(name));

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={() => handleClick("luigi")}>Click Me</button>
    </div>
  );
}
