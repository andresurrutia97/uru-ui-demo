<p align="center">
  <a href="">
    <img width="300" src="./src/Assets/img/logoWeb.png">
  </a>
</p>

<h1 align="center">Uru-UI Demo-app</h1>

<div align="center"> 
  
  Demo app de la librería Uru-UI<br />
    <h3>[Demo](https://uruui-demoapp.web.app/home)</h3>
</div>

## Dependencias utilizadas

Este proyecto se creó con [Create React App](https://github.com/facebook/create-react-app).

#### `React Router`

#### `Redux`

#### `Sass`

#### `Uru-Ui`

## Scripts

Instala todas las dependencias utilizadas en el proyecto.

```bash
npm install
```

Ejecuta la aplicación en modo desarrollo.<br />
Abrir [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

```bash
npm start
```

Crea la aplicación lista para producción en la carpeta "build".

```bash
npm run build
```

### Deployment

Para esta aplicación se utilizó el hosting de Firebase, por lo que se requiere tener un proyecto en Firebase.

En el directorio del proyecto ejecuta los siguientes comandos para hacer deploy.

Instala las herramientas de Firebase de manera global.

```bash
npm install -g firebase-tools
```

Inicia sesión en tu cuenta de Firebase.

```bash
firebase login
```

Inicializa la aplicación y establece los parámetros requeridos por Firebase.

```bash
firebase init
```

- Seleccionar solo hosting.
- Seleccionar el nombre del proyecto en Firebase.
- Especificar el directorio "build" como carpeta a subir a Firebase.
- "y" a configurar como single-page app.
- "n" a sobreescribir el archivo build/index.html.

Despliega la aplicación en Firebase.

```bash
firebase deploy
```
