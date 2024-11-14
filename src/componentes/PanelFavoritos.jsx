/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../style/PanelFavoritos.css'


const PanelFavoritos = ({ comicsMG, setMostrarPanelFavoritos }) => {

    return (
        <div className="panelFavoritosContenedorPadre">
            {comicsMG.length ? (
                comicsMG?.map(comic => (<p key={comic.id}> {comic.title} </p>))) :
                (<p>No hay favoritos aún.</p>
                )}
            <button onClick={() => setMostrarPanelFavoritos(false)} >Close</button>
        </div>
    );
};

export default PanelFavoritos;