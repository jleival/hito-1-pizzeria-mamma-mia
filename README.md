# 🍕 Pizzería Mamma Mía!


[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Completado-success?style=for-the-badge)](https://github.com/jleival/hito-1-pizzeria-mamma-mia)
[![GitHub Pages](https://img.shields.io/badge/Demo-Online-informational?style=for-the-badge&logo=github&logoColor=white)](https://jleival.github.io/hito-1-pizzeria-mamma-mia/)

*Aplicación web moderna desarrollada en React para la gestión y visualización de un catálogo de pizzas artesanales, aplicando componentes modulares y diseño responsivo.*


---

💻 Vista de Escritorio | 📱 Vista Móvil |
| :---: | :---: |
| ![Escritorio](https://raw.githubusercontent.com/jleival/hito-1-pizzeria-mamma-mia/main/src/assets/img/escritorio.png) | ![Móvil](https://raw.githubusercontent.com/jleival/hito-1-pizzeria-mamma-mia/main/src/assets/img/movil.png)

---

## 🚀 Vista Previa (Preview)

> Puedes revisar el despliegue en línea de la aplicación haciendo clic en el siguiente enlace:  
👉 **[Ver Pizzería Mamma Mía en GitHub Pages](https://jleival.github.io/hito-1-pizzeria-mamma-mia/)**

---

## 🛠️ Tecnologías y Herramientas Utilizadas

Este proyecto fue construido utilizando herramientas modernas del ecosistema de desarrollo frontend:

* **React (Vite):** Librería principal para la construcción de interfaces de usuario basadas en componentes.
* **React-Bootstrap / Bootstrap 5:** Framework CSS para el diseño responsivo, grillas fluidas y componentes pre-estilizados.
* **JavaScript (ES6+):** Lógica de componentes, manejo de props y operadores ternarios.
* **HTML5 / CSS3:** Estructura semántica y personalización de estilos globales.
* **Git & GitHub:** Control de versiones y despliegue continuo mediante GitHub Pages.

---

## 📂 Arquitectura y Estructura del Proyecto

El proyecto sigue una estricta **arquitectura modular**, separando cada responsabilidad en componentes independientes dentro de la carpeta `src/components/`:

```text
src/
├── assets/
│   └── img/
│       └── Header.jpg
│
├── components/
│   ├── CardPizza.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   └── Navbar.jsx
│
├── App.css
├── App.jsx
└── main.jsx
```
---
## 📋 Descripción de Componentes
1. Navbar.jsx: Barra de navegación superior responsiva que incluye enlaces dinámicos según el estado de autenticación del usuario (token) y el monto formateado del carrito de compras (total).

2. Header.jsx: Banner principal con imagen de fondo optimizada, efectos visuales oscurecidos mediante gradientes y títulos institucionales.

3. Home.jsx: Componente contenedor que organiza la vista principal integrando el Header y una grilla flexible con las tarjetas de pizzas.

4. CardPizza.jsx: Componente reutilizable que recibe propiedades (props) como nombre, precio, ingredientes (soporta textos o arreglos) e imagen para renderizar cada producto de forma simétrica.

5. Footer.jsx: Pie de página institucional fijado en la parte inferior de la pantalla.

---
## ⚙️ Guía de Instalación y Ejecución Local
Si deseas clonar y ejecutar este proyecto en tu computadora localmente, sigue estos sencillos pasos:

1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando: <br>
git clone [https://github.com/jleival/hito-1-pizzeria-mamma-mia.git](https://github.com/jleival/hito-1-pizzeria-mamma-mia.git)
2. Entrar al directorio del proyecto:
cd hito-1-pizzeria-mamma-mia: <br>
3. Instalar dependencias
Dado que la carpeta node_modules no se incluye en el repositorio remoto, debes descargar las dependencias necesarias con: <br>
npm install
4. Ejecutar el servidor de desarrollo <br>
Inicia el entorno local con Vite: <br> npm run dev <br><br>
¡Listo! La aplicación se abrirá automáticamente en tu navegador web (usualmente en http://localhost:5173).
---
## 👨‍💻 Autor

Desarrollado con 💙 y 🍕 por **jleival** 👉 [GitHub Profile](https://github.com/jleival)