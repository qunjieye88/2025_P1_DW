/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feed from './componentes/Feed.jsx'
import VisorComic from './componentes/VisorComic';
import './style/VisorComic.css'
import BandejaComics from './componentes/BandejaComics.jsx'
import PanelFavoritos from './componentes/PanelFavoritos.jsx'
function getLocalItems(){
  const localtasks= localStorage.getItem("favoritos");
  if(localtasks){
      return JSON.parse(localtasks);
  }else{
      return[];
  }
}

function App() {
  const ts = "4";
  const publicKey = "4d7b89fdaf5db7181544503906bbf544";
  const privateKey = "eb2d491e06b3f0ee0a6497fdeeb19ec48d62bd15";
  const hash = "2f0896f43c05123e99db1630fc41adf1";
  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  
  const [dato, setData] = useState(null);
  const [datoPersonajes, setDatoPersonajes] = useState(null);
  const [comicsMG, setComicsMG] = useState(getLocalItems());
  const [mostrarPanelFavoritos, setMostrarPanelFavoritos] = useState(false);
  console.log(url);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data.data.results);
      }
      )
  }, [])

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(comicsMG));
  }, [comicsMG]);


  const [comicDescription, setComicDescription] = useState(null);
  const visorComic = comicDescription && (<VisorComic comicsMG={comicsMG} setComicsMG={setComicsMG} comic={comicDescription} setComicDescription={setComicDescription} />);
  const bandejaComics = dato && (<BandejaComics datos={dato} setComicDescription={setComicDescription}></BandejaComics>);
  const panelFavorito = mostrarPanelFavoritos && (<PanelFavoritos comicsMG={comicsMG} setMostrarPanelFavoritos={setMostrarPanelFavoritos}></PanelFavoritos>);


  //
  return (
    <>
      <Feed datos={dato} setComicDescription={setComicDescription} setMostrarPanelFavoritos={setMostrarPanelFavoritos}></Feed>
      {visorComic}
      {bandejaComics}
      {panelFavorito}
    </>
  )
}

export default App
