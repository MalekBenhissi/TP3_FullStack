import { useState } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);

  // Fonctions pour incrémenter et décrémenter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={increment}>+ Incrémenter</button>
      <button onClick={decrement}>- Décrémenter</button>
    </div>
  );
}

export default Compteur;
