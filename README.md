# May App: Pokememo

## Technologies

- [NodeJs](https://nodejs.org/)
- Frontend: [React](https://reactjs.org/).
- Backend: [Express](https://expressjs.com/).
- Base de Datos: [MongoDB](https://www.mongodb.com/).

## Como utilizar

Crear en la raiz del proyecto un archivo ".env" con la clave **MONGO_URI** y la conexion a la base de datos de [MongoDB Cloud](https://cloud.mongodb.com/).

Cargar la BD con los datos que quieras utilizar (recomendado minimo: 21 personajes)

```
    npm i
    npm run build
    npm start
```

## Challenge

Esta app parte de un [Challenge](https://go.rviewer.io/dev-memory-game-es/) realizado por [Moure dev](https://github.com/mouredev).
[Challenge mensuales](https://github.com/mouredev/Monthly-App-Challenge-2022)

# Poke Memo

La dinámica del juego consiste en presentar un tablero con una serie de cartas boca abajo y revelar todas las parejas. El usuario tocará cada carta para darle la vuelta y, si dos de ellas coinciden al ser descubiertas, se pondrán boca arriba. En caso contrario, se volverán a ocultar.

La tematica de este juego es de pokemon.

El juego se gana si se descubren todas las parejas.

La  ultima version siempre estara publicada en https://pokememo.up.railway.app/ .

