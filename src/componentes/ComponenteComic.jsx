/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../style/ComponenteComic.css';

const ComponenteComic = ({ datos, setComicDescription }) => {
    return (
        <div key={datos.id} className="componenteComicContenedorPadre" >

            <div className="componenteComicContenedorTexto">
                <p className='ComponenteComicTexto'>{datos.title}</p>
                <p className="ComponenteComicTexto"> {datos.dates[1].date}</p>
            </div>

            <img
                className='componenteComicImagen'
                onClick={() => setComicDescription(datos)}
                src={`${datos.thumbnail.path}.${datos.thumbnail.extension}`}
                alt={datos.title}
            />
        </div>
    );
};

export default ComponenteComic;