<p align="center">
  <a href="">
    <img width="300" src="./src/Assets/img/logoWeb.png">
  </a>
</p>

<h1 align="center">Uru-UI Demo-app</h1>

<div align="center"> 
  
  Demo app de la librería Uru-UI

</div>

## Dependencias utilizadas

Este proyecto se creó con [Create React App](https://github.com/facebook/create-react-app).

#### `React Router`

#### `Redux`

#### `Sass`

#### `Uru-Ui`

## Scripts

```bash
npm install
```
Instala todas las dependencias utilizadas en el proyecto.

```bash
npm start
```
Ejecuta la aplicación el modo desarrollo<br />
Abrir [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

```bash
npm run build
```
Crea la aplicación para producción en la carpeda "build".

### Deployment

Para esta aplicación se utilizó el hosting de firebase, por lo que se requiere tener un proyecto en firebase.

En directorio de proyecto ejecuta los siguientes comandos para hacer deploy en firebase

```bash
npm install -g firebase-tools
```
Instala las herramientas de firebase de manera global.

```bash
firebase login
```
Inicia sesión en tu cuenta de firebase

```bash
firebase init
```
Inicializa la aplicación y establece los parametros de firebase.

```bash
firebase deploy
```
Despliega la aplicación en firebase.
