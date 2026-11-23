# bibliotecas-frontend

Interfaz web (Angular) para registrar bibliotecas y ver los libros de cada una.

- **Formulario** para registrar bibliotecas (nombre, dirección y ciudad).
- **Tabla** con título, autor, año y biblioteca de cada libro. Los datos vienen de `GET /bibliotecas`; no hay datos fijos en el frontend.

## Requisitos

- Node.js 22.22 o superior (o 24)
- El backend `bibliotecas-backend` en ejecución en http://localhost:8080 (ver su README)

## Ejecutar

```bash
npm install
npm start
```

Abra http://localhost:4200.

Si el backend usa otra dirección, cambie la constante `url` en
`src/app/services/biblioteca.service.ts`.

## Estructura

```
src/app/
├── components/
│   ├── biblioteca-form/   formulario de registro
│   └── libros-tabla/      tabla de libros con su biblioteca
├── models/                interfaces Biblioteca y Libro
└── services/              BibliotecaService (HTTP: GET y POST /bibliotecas)
```
