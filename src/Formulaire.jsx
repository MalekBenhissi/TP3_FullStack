import { useState } from 'react';

function Formulaire() {
  // État pour stocker le nom saisi
  const [nom, setNom] = useState('');

  // Fonction appelée au clic du bouton
  const handleClick = () => {
    alert(`Bonjour, ${nom} !`);
  };

  // Fonction appelée à chaque changement dans le champ texte
  const handleChange = (event) => {
    setNom(event.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Entrez votre nom" 
        value={nom} 
        onChange={handleChange} 
      />
      <button onClick={handleClick}>Dire Bonjour</button>
    </div>
  );
}

export default Formulaire;
