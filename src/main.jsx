import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* 
  JavaScript sintaxis extension (JSX) es una extensión del lenguaje 
  desarrollada por Facebook para react.
  Parece JS pero muestra código de HTML, y básicamente es un lenguaje de 
  "Template" que muestra el HTML pero tiene todas las funciones de JavaScript 
*/

/* 
  Una vez compilado son archivos JS con funciones y objetos normales
*/

/* 
  Reglas en JSX:
  - A diferencia de HTML, que no es estricto, en JSX si un elemento 
  HTML tiene una etiqueta de apertura,deberás tener también la de cierre.
  - Las etiquetas de solo apertura como <link>, <img> o <input> deberán
  finalizar con />.
  - Cada componente debe tener un "return".
  - En este return debe haber máximo un solo elemento en el nivel máximo.
*/
