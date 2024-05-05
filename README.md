# mern-user-login
aplicación utilizando MERN para control de actividades, contiene login, control de rutas y cookies.

Para lo cual se divide en 2 partes, el backend y frontend, asimismo indicamos lo utilizado:
> [!BACKEND]
   - npm init -y 
   - npm i express
   - npm i -D nodemon
   - npm i morgan   :: para ver la peticones por consola
   - npm i mongoose
   - npm i bcryptjs  :: encriptar una contraseña 
   - npm i jsonwebtoken  :: - generar un token
   - npm i dotenv
   - npm i cookie-parser
   - npm i zod   ::: validacion de datos
   - npm i cors

> [!FRONTEND]
FRONTEND
  -  npm create vite
    CLIENT
       - npm install -D tailwindcss postcss autoprefixer
       - npx tailwindcss init -p
       - npm install react-router-dom
       - npm install react-hook-form
       - npm install axios
       - npm install js-cookie :: permite leer las cookies del frontend
       - npm install dayjs

> [!CARPETAS]
- controllers     = funciones que se ejecutaran al visitar una ruta o url
- ibs           = crear funciones para ser utilizado varias veces
- middlewares     = para proteger nuestras rutas nos van permitir crear - - funciones que antes de llegar ala ruta se validen
models          = creamos el esquema para mongoDB
routes          = rutas que el frontend pedira
validators / schemas    = validacion para un caracter utilizamos ZOt
