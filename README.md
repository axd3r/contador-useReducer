# 🧮 Contador con useReducer + React + Vitest

Este proyecto es una colección de contadores desarrollados en **React** usando `useReducer`, `Context API` y `localStorage` para practicar conceptos avanzados de estado, pruebas unitarias y persistencia.

## 🧰 Tecnologías utilizadas

- ⚛️ React + TypeScript
- ⚙️ useReducer + Context API
- 💾 localStorage (persistencia)
- 🧪 Vitest + Testing Library (pruebas)
- 🌗 Dark mode (contextual)
- 📦 Vite (entorno de desarrollo rápido)

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Counter.tsx              # Contador básico
│   ├── MultiCounter.tsx         # Múltiples contadores en memoria
│   ├── MultiCounterStorage.tsx  # Múltiples contadores persistentes
│   └── __tests__/               # Pruebas unitarias
|        ├── Counter.test.tsx
|        ├── MultiCounterReducer.test.ts
|        ├── MultiCountertStorage.test.tsx
|        └── ThemeContext.test.ts
├── context/
│   └── ThemeContext.tsx         # Contexto de tema (light/dark)
├── router/
│   └── Router.tsx
├── App.tsx
└── main.tsx
```

## 🚀 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/axd3r/contador-useReducer.git
cd contador-usereducer
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

4. Corre las pruebas:

```bash
npm run test
```

## 🧪 Pruebas cubiertas

- Componente `Counter`: renderizado inicial, incremento y decremento.
- Reducer de múltiples contadores.
- Persistencia de datos en `localStorage` en `MultiCounterStorage`.
- Contexto de tema y `themeReducer`.

## 🌗 Modo oscuro

Este proyecto incluye un **dark mode** controlado por `Context` + `useReducer`. Se guarda automáticamente en `localStorage` y aplica la clase correspondiente al `<body>`.

## 📸 Capturas de pantalla

> Puedes agregar capturas si deseas mostrar el UI con modo claro/oscuro y múltiples contadores.

## 📜 Licencia

Este proyecto está bajo la licencia MIT.