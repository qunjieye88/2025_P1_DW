/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../style/Feed.css'

const Feed = ({ datos, setComicDescription, setMostrarPanelFavoritos }) => {
  const [titulosRecientes, setTitulosRecientes] = useState();
  const [indiceFeedComicActual, setIndiceFeedComicActual] = useState(0);

  useEffect(() => {
    if (datos) {
      const titulosRecientes = datos
        .filter(dato => !isNaN(new Date(dato.dates[1].date)))
        .sort((a, b) => new Date(b.dates[1].date) - new Date(a.dates[1].date));

      setTitulosRecientes(titulosRecientes);
    }
  }, [datos]);

  const siguienteComic = () => {
    console.log(indiceFeedComicActual);

    console.log(titulosRecientes.length);
    if (titulosRecientes.length == indiceFeedComicActual + 1) {
      setIndiceFeedComicActual(0);
    } else {

      setIndiceFeedComicActual(indiceFeedComicActual + 1);
    }
  }

  const anteriorComic = () => {
    console.log(indiceFeedComicActual);

    console.log(titulosRecientes.length);
    if (0 == indiceFeedComicActual) {
      setIndiceFeedComicActual(titulosRecientes.length - 1);
    } else {

      setIndiceFeedComicActual(indiceFeedComicActual - 1);
    }
  }



  const contenedor = titulosRecientes &&
    (

      <div key={titulosRecientes[indiceFeedComicActual].id} className="feedContenedorData" >

        <button className="feedBotonCarrusel" onClick={anteriorComic}> &lt; </button>
        <div className="feedContenedorTexto">
          <p className='feedTituloComic'>{titulosRecientes[indiceFeedComicActual].title}</p>
          <p className="feedFechaComic">Fecha de Publicacion: {titulosRecientes[indiceFeedComicActual].dates[1].date}</p>
          <button className="botonInfo" onClick={() => setComicDescription(titulosRecientes[indiceFeedComicActual])}>INFO</button>
        </div>

        <img
          className='feedImagen'
          onClick={() => setComicDescription(titulosRecientes[indiceFeedComicActual])}
          src={`${titulosRecientes[indiceFeedComicActual].thumbnail.path}.${titulosRecientes[indiceFeedComicActual].thumbnail.extension}`}
          alt={titulosRecientes[indiceFeedComicActual].title}
        />

        <button className="feedBotonCarrusel" onClick={siguienteComic}>&gt;</button>

      </div>
    );

  return (
    <div className="feedContenedorPadre">

      <div className="feedContenedorTitulo">
        <h1 className="feedTitulo">COMICS RECIENTES</h1>
        <button onClick={() => setMostrarPanelFavoritos(true)} className="feedBotonMG">MG</button>
      </div>
      {contenedor}

    </div>
  );
};

export default Feed;