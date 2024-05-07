# To-Do List App

Esta es una aplicación web de lista de tareas (To-Do List) construida con React y Redux. Permite agregar, editar y eliminar tareas, así como establecer fechas límite para cada tarea.

## Tecnologías utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Redux: Biblioteca de gestión de estado para aplicaciones JavaScript.
- React-Redux: Biblioteca oficial de React que permite integrar Redux con componentes de React.
- JSX: Extensión de sintaxis de React que permite escribir componentes de una manera más legible y similar a HTML.
- HTML: Lenguaje de marcado para estructurar la página web.
- JavaScript: Lenguaje de programación utilizado para agregar interactividad y lógica a la aplicación.
- npm: Gestor de paquetes de Node.js utilizado para instalar y administrar las dependencias del proyecto.
- GitHub: Plataforma de control de versiones utilizada para alojar el código fuente de la aplicación.

## Instalación y ejecución

1. Clona el repositorio de GitHub:

   git clone https://github.com/tu-usuario/todo-list.git

2. Navega al directorio del proyecto:

   cd todo-list

3. Instala las dependencias del proyecto:

   npm install

4. Inicia la aplicación en modo de desarrollo:

   npm start

   La aplicación se abrirá automáticamente en tu navegador predeterminado en la dirección `http://localhost:3000`.

## Estructura del proyecto

- `src/components`: Contiene los componentes de React utilizados en la aplicación, como `TaskList`, `TaskItem`, `AddTask` y `EditTask`.
- `src/redux`: Contiene los archivos relacionados con Redux, como `store`, `reducers`, `actions` y `actionTypes`.
- `src/index.jsx`: Punto de entrada de la aplicación React.
- `src/App.jsx`: Componente principal de la aplicación.
- `public/index.html`: Archivo HTML que renderiza la aplicación React.

## Funcionalidades

- Agregar tarea: Permite ingresar el título de una nueva tarea y una fecha límite opcional.
- Editar tarea: Permite modificar el título y la fecha límite de una tarea existente.
- Eliminar tarea: Permite eliminar una tarea de la lista.
- Visualizar lista de tareas: Muestra una lista de todas las tareas agregadas, incluyendo su título y fecha límite (si se proporcionó).

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y commitea tus modificaciones (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).
