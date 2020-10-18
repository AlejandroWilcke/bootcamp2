# Bootcamp 2 Test

1. git clone https://github.com/AlejandroWilcke/bootcamp2.git
2. npm install
3. npm run build
4. npm start

```
La aplicación utiliza PSQL y tiene un usuario, contraseña, db y tablas para funcionar.

Desde el bash de PSQL, sería algo así:

CREATE ROLE me LOGIN PASSWORD 'aleale';
CREATE DATABASE bootcamp;

\c bootcamp;

CREATE TABLE passengers (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  lastname VARCHAR(30),
  flightnumber VARCHAR(5),
);

CREATE TABLE packages (
  ID SERIAL PRIMARY KEY,
  description VARCHAR(50),
  type VARCHAR(10),
  id_passenger INT,
  CONSTRAINT fk_passenger
    FOREIGN KEY(id_passenger) 
        REFERENCES passengers(id)
);

```
![Alt Text](https://i.gyazo.com/1bc30fbd0de2c2c8037b3669e2e43410.png)
