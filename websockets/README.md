<div align="center">

# 🚀 Taller: WebSockets con Socket.IO

**Aprende a implementar comunicación en tiempo real construyendo un chat desde cero**

<p align="center">
    <img src="https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Socket.IO-4.x-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.IO" />
    <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

</div>

<br>

## 🎯 Objetivo del Taller

El objetivo de este taller es que aprendas a implementar **WebSockets** utilizando **Socket.IO** para crear comunicación bidireccional en tiempo real entre un servidor y múltiples clientes.

La idea es que **construyas el chat por tu cuenta**, investigando y utilizando los recursos disponibles en internet (documentación de Socket.IO, tutoriales, etc.). Los archivos de inicio tienen comentarios guía con los pasos a seguir, pero **tú debes escribir el código**.

> 💡 **Tip**: La documentación oficial de Socket.IO es tu mejor amigo: https://socket.io/docs/v4/

<br>

## 📁 Estructura del Proyecto

```
websocket-taller/
├── start/              # 👈 Aquí trabajas tú
│   ├── client/         # Frontend React + Vite
│   └── server/         # Backend Express + Socket.IO
│
└── final/              # ✅ Solución completa (solo si te atascas)
    ├── client/
    └── server/
```

- **`start/`**: Contiene el código base con TODOs y pistas para que implementes la funcionalidad de WebSockets.
- **`final/`**: Contiene la solución completa. Úsala solo como referencia si te quedas muy atascado.

<br>

## 🛠️ Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **[Node.js](https://nodejs.org)** - Versión **22 o superior**
- **npm** - Viene incluido con Node.js

Para verificar tu versión de Node:
```bash
node --version  # Debe ser v22.x.x o superior
```

<br>

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Andr3xDev/websocket-taller.git
cd websocket-taller
```

### 2. Instalar dependencias

Debes instalar las dependencias tanto del **cliente** como del **servidor**:

```bash
# Instalar dependencias del servidor
cd start/server
npm install

# Instalar dependencias del cliente
cd ../client
npm install
```

### 3. Ejecutar el proyecto

Necesitas **dos terminales** para correr el proyecto:

**Terminal 1 - Servidor:**
```bash
cd start/server
npm run dev
```
El servidor correrá en: `http://localhost:3050`

**Terminal 2 - Cliente:**
```bash
cd start/client
npm run dev
```
El cliente correrá en: `http://localhost:5175`

<br>

## 📝 ¿Qué debes implementar?

### En el Servidor (`start/server/src/index.ts`)

1. Importar e inicializar Socket.IO
2. Manejar el evento `connection` para nuevas conexiones
3. Escuchar eventos: `join`, `chat-message`, `disconnect`
4. Emitir eventos: `message`, `user-joined`, `user-left`

### En el Cliente (`start/client/src/App.tsx`)

1. Importar y conectar a Socket.IO
2. Escuchar eventos: `message`, `user-joined`, `user-left`
3. Emitir eventos: `join`, `chat-message`
4. Manejar la desconexión al desmontar el componente

<br>

## 📚 Recursos Útiles

- 📖 [Documentación oficial de Socket.IO](https://socket.io/docs/v4/)
- 🎥 [Socket.IO en 100 segundos (Video)](https://www.youtube.com/watch?v=1BfCnjr_Vjg)
- 📝 [Guía de inicio rápido](https://socket.io/get-started/chat)
- 🔧 [API del servidor](https://socket.io/docs/v4/server-api/)
- 🔧 [API del cliente](https://socket.io/docs/v4/client-api/)

<br>

## ✅ Resultado Esperado

Cuando completes el taller, tendrás un chat funcional donde:

- ✨ Múltiples usuarios pueden conectarse simultáneamente
- 💬 Los mensajes se envían y reciben en tiempo real
- 👋 Se notifica cuando alguien entra o sale del chat
- 🔄 La comunicación es bidireccional (cliente ↔ servidor)

<br>

## 🆘 ¿Atascado?

1. **Lee los comentarios TODO** en los archivos - tienen pistas útiles
2. **Consulta la documentación** de Socket.IO
3. **Revisa la carpeta `final/`** si necesitas ver la solución

<br>

---

<div align="center">
    <p><strong>Byte Semillero</strong> 🚀</p>
    <a href="https://github.com/Andr3xDev"><img src="https://github.com/Andr3xDev.png" width="50px" style="border-radius: 50%;" alt="Andr3xDev"/></a>
</div>