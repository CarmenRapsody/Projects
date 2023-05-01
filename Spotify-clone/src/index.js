import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './app/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //Metemos nuestra App en le provider para que toda la app
    //tenga acceso a todo el store, teniendo acceso a las capas de datos
    <Provider store={store}>
        <App/>
    </Provider>
    
  
);

