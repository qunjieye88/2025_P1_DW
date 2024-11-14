/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import corazon from "../imagenes/heart.png";
import corazon2 from "../imagenes/heart2.png";

const VisorComic = ({ comic, setComicDescription, setComicsMG }) => {
  const [personajes, setPersonajes] = useState([]);
  const [MG, setMG] = useState(false);

  const publicKey = "4d7b89fdaf5db7181544503906bbf544";
  const privateKey = "eb2d491e06b3f0ee0a6497fdeeb19ec48d62bd15";
  const hash = "2f0896f43c05123e99db1630fc41adf1";
  const ts = "4";

  useEffect(() => {
    setPersonajes([]);

    const fetchImages = comic.characters.items.map((item) => {
      const url = `${item.resourceURI}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
      
      return fetch(url)
        .then(response => response.json())
        .then(caracter => {
          setPersonajes(prevPersonajes => [
            ...prevPersonajes,
            {
              url: caracter.data.results.map(x => `${x.thumbnail.path}.${x.thumbnail.extension}`),
              name: item.name
            }
          ]);
        });
    });

    setComicsMG((prevComics) => {
      if (
        prevComics.some(comicsLikeado => comicsLikeado.id == comic.id)) {
        setMG(true);
      }
      return prevComics;
    });

  }, [comic, setComicsMG]);

  const agegarFavoritos = () => {
    setMG(!MG);
    setComicsMG((anteriores) => {
      if (!anteriores.some(comicFavoritos => comicFavoritos.id === comic.id)) {
        return [...anteriores, comic];
      } else {
        return anteriores.filter((comicFavoritos) => comicFavoritos.id !== comic.id);
      }
    });
  };

  const personaje = personajes.length > 0 ? (
    <div className='visorComicContenedorGaleria'>
      {personajes.map((personaje, index) => (
        <div key={index} className='visorComicContenedorImagen'>
          <p>{personaje.name}</p>
          <img className="VisorComicImgen" src={personaje.url[0]} alt={personaje.name} />
        </div>
      ))}
    </div>
  ) : (
    <p>No hay personajes</p>
  );

  return (
    <div className="ContenedorVisorComic">
      <div className='visorComicContenedorMG'>
        <div
          className={MG ? 'visorComicBotonMG-activado' : 'visorComicBotonMG-desactivado'}
          onClick={agegarFavoritos}
        />
      </div>
      <div className='visorComicContenedorInfo'>
        <h2 className="tilutloVisorComic">{comic.title}</h2>
        <p className="descripcionVisorComic">{comic.description || "Descripcion no encontrado."}</p>
        <p className="fechaComics">Paginas: {comic.pageCount}</p>
        <p className="fechaComics">Precio: {comic.price || "0"}</p>
        {personaje}
        <button className="visorComicCerrar" onClick={() => setComicDescription(null)}>Close</button>
      </div>
    </div>
  );
};

export default VisorComic;