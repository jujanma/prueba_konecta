# Prueba konecta

En esta prueba tecnica se encuentra la carpeta tanto del backend como del frontend, a su vez hay una carpeta extra de bd donde se encuentra el archivo .sql donde se encuentran las tablas que se crearon para el correcto funcionamiento de la aplicación, esta debe ser importada en su base de datos (se recomienda MySQL workbench), los puertos que se usaron fueron:

front: 5173 

back: 5000

Para iniciar sesión hay un usuario el cual es el siguiente

User: simongonzalezechavarria@gmail.com

pass: simon123

Este usuario es administrador en el cual se pueden probar todas las funcionalidades CRUD tanto de users como de products.

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


## Autor

- [@jujanma](https://github.com/jujanma)