/** @type {import('tailwindcss').Config} */
module.exports = {
  /* 
  aquí se agregan los archivos que usarán las clases de tailwind css.
  al usar "**" se le indica que entre a todos los archivos dentro de la
  carpeta anterior "src" y al colocar "*.jsx" se le indica que se va a
  encontrar con archivos con las extensión ".jsx".
  */
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
