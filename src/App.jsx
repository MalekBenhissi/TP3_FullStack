import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bienvenue from './Bienvenue';
import Compteur from './Compteur';
import Formulaire from './Formulaire';
import ListeCourses from './ListeCourses';
function App() {
  return (
    <div>
      <h1>
        Mon application React
      </h1>
      <Bienvenue nom="Malek" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
    </div>
    
  );

  

}

export default App
