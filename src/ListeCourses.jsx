import { useState } from 'react';

function ListeCourses() {
  // État pour stocker la liste des articles
  const [articles, setArticles] = useState([]);
  // État pour stocker la valeur du champ texte
  const [nouvelArticle, setNouvelArticle] = useState('');

  // Fonction appelée quand on clique sur le bouton "Ajouter"
  const ajouterArticle = () => {
    if (nouvelArticle.trim() !== '') { // éviter les entrées vides
      setArticles([...articles, nouvelArticle]);
      setNouvelArticle(''); // vider le champ texte
    }
  };

  return (
    <div>
      <h2>Ma liste de courses</h2>
      <input
        type="text"
        placeholder="Nouvel article"
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
      />
      <button onClick={ajouterArticle}>Ajouter</button>

      <ul>
        {articles.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
