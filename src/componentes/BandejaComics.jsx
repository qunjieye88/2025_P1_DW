/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import ComponenteComic from './ComponenteComic';
import '../style/BandejaComics.css'

const BandejaComics = ({ datos, setComicDescription }) => {
    return (
        <div className="bandejaComicsContenedorPadre">

            <h1 className="BandejaComicsTitulo">COMICS RECIENTES</h1>
            <div className='BandejaComicsTituloContenedor'>
                {datos.map(comic => (
                    <ComponenteComic key={comic.id} datos={comic} setComicDescription={setComicDescription}></ComponenteComic>
                ))}
            </div>
            
        </div>
    );
};

export default BandejaComics;