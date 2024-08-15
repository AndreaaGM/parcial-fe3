import React, { useState } from 'react';
import Card from './Card';

function Form() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [animalFavorito, setAnimalFavorito] = useState("");
  const [flag, setFlag] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //1.- Validación del nombre
    if (nombre.length < 3 || nombre.startsWith(" ")) {
      setFlag("Por favor revisa que tu nombre este correcto");
      setShowCard(false);
      return;
    }

    //2.- Validación de la edad
    if (!/^\d+$/.test(edad) || parseInt(edad) <= 0) {
      setFlag("Por favor revisa que tu edad sea correcta");
      setShowCard(false);
      return;
    }

    //3.- Validación del animal favorito
    if (animalFavorito.length < 3) {
      setFlag("Por favor revisa que la información sea correcta");
      setShowCard(false);
      return;
    }

    setFlag("");
    setShowCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Edad:</label>
          <input
            type="text"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div>
          <label>Animal Favorito:</label>
          <input
            type="text"
            value={animalFavorito}
            onChange={(e) => setAnimalFavorito(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {flag && <p style={{ color: 'red' }}>{flag}</p>}

      {showCard && <Card nombre={nombre} edad={edad} animalFavorito={animalFavorito} />}
    </div>
  );
}

export default Form;
