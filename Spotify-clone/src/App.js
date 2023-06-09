/* eslint-disable no-lone-blocks */
import { useEffect} from 'react';
import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getTokenFromURL } from './components/spotyLogic';
import { useDispatch, useSelector } from 'react-redux';

import SpotifyWebApi from 'spotify-web-api-js';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import{ selectUser, SET_USER} from './features/UserSlice';
import { selectPlaylist, SET_PLAYLIST } from './features/PlaylistSlice';


const spotify = new SpotifyWebApi(); //spotify hereda todos los metodos de la API

function App() {
  const token = useSelector(selectToken) 
  const user = useSelector(selectUser)
  
  const dispatch = useDispatch() //inicializamos el hook
  {/** Una vez obtenido el token, ahora tenemos que hacer que 
       la API de spoty nos devuelva un usuario
       instalamos la libreria: spotify-web-api-js
  */}
  
  useEffect(() => {
    const hash = getTokenFromURL(); //obtenemos el token de la url
    const _token = hash.access_token;
    //setToken(_token) //asi lo estamos guardando en una var local token
    
    //Despachamos el token solo si existe
    if(_token){
      dispatch(SET_TOKEN(_token))
      //queremos guardar token en el store, dispath es un hook,
      //pero lo que vamos a despachar es el user,no el token
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => dispatch(SET_USER(user)))
      console.log("dentro del if=> ",  _token) 

      //Obtenemos la playlist usando su token
      spotify.getPlaylist("2iV8XXfovDYk4YAYWAItEE").then(playlist => 
        dispatch(SET_PLAYLIST(playlist)))
    }
  },[dispatch]); //useEffect se carga cada vez que usemos el dispachat


  return (
    <div> 
    { 
      user ? <Player/> : <Login/>
    }
    </div>
  );
}

export default App;


{/**  Problema encontrado: React me renderizaba dos veces
        el componente, duplicandome el token, y al ejecutar el 
        useEffect, el token no se guardaba.
        
      Solucion: El <Reac.StrictMode> del index.js renderiza dos veces
        los componentes, intencionadamente para ayudar a detectar errores
        de la renderizacion. Eliminalo y deja solo la llamada 
        al componente principal <App>.
*/}