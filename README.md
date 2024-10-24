# Prueba konecta

En esta prueba tecnica se encuentra la carpeta tanto del backend como del frontend, a su vez hay una carpeta extra de bd donde se encuentra el archivo .sql donde se encuentran las tablas que se crearon para el correcto funcionamiento de la aplicación, esta debe ser importada en su base de datos (se recomienda MySQL workbench), los puertos que se usaron fueron:

front: 5173 

back: 5000

Para iniciar sesión hay un usuario el cual es el siguiente

User: carlos.sanchez@example.com

pass: carlos123

Este usuario es administrador en el cual se pueden probar todas las funcionalidades CRUD tanto de users como de products.

## Funcionamiento

En esta prueba tenemos 3 funcionalidades principales, la inicial es el login que es donde iniciamos nuestro flujo
una vez realicemos el login, vamos a tener un home en el cual mostraremos una tabla con el dinero que hay en general
en cada producto, a la izquierda tendremos un menu donde estara Usuarios y Productos, que es donde podremos crear,
editar, borrar y consultar el detalle de cada producto o usuario. 

## Los endpoint creados son:

como base tenemos localhost:3000/api y para las diferentes funcionalidades tenemos.

Para users:

GET = /users

POST = /users

PUT = /users/:id

DELETE = /users/:id

Para products:

GET = /products

POST = /products

PUT = /products/:id

DELETE = /products/:id

## Variables de entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env en el proyecto backend, en el proyecto frontend ya van en el archivo env.js

`DB_NAME=bank_sales_db`

`DB_USER=your_user`

`DB_PASSWORD= your_pass`

`DB_HOST=localhost`

`JWT_SECRET=G$8@xN2&g3!PzQmV*D1eLrA7`

`PORT=5000`

### Variables de captcha
`HCAPTCHA_SECRET_KEY=ES_877ab354a74645ad8d7473caded11a30`

## Instalación de dependencias

Frontend: para instalar las dependencias en el frontend debido a que se uso Vite + react se realiza con el comando 'yarn' dentro de la carpeta del Frontend, no es necesario darle yarn install, solo con yarn, y para su inicio con 'npm run dev".

Backend: para instalar las dependencias en el backend se realiza normalmente con npm install y para su ejecución realizamos el comando npm start.

## Tecnologias empleadas

Frontend: JavaScript con su libreria reactJS (yarn v1.22.22), TailwindCSS y material UI.

Backend: JavaScript con su framework nodeJS (v20.17.0), Express, Sequelize.

Base de datos: MySQL (Generada en MySQL Workbench 8.0 CE)



## Autor

- [@jujanma](https://github.com/jujanma)
