/**
 * ============================================
 * 🚀 TALLER: Implementación de WebSockets (Servidor)
 * ============================================
 * 
 * En este archivo implementarás el servidor de WebSockets usando Socket.IO.
 * 
 * 📚 API de Socket.IO (Servidor):
 * ─────────────────────────────────────────────────────────────────────────
 * | Método                              | Descripción                      |
 * |-------------------------------------|----------------------------------|
 * | io.on('connection', (socket) => {}) | Escucha nuevas conexiones        |
 * | socket.on('evento', callback)       | Escucha eventos de UN cliente    |
 * | socket.emit('evento', data)         | Envía solo al cliente actual     |
 * | socket.broadcast.emit('evento', data)| Envía a todos EXCEPTO al actual |
 * | io.emit('evento', data)             | Envía a TODOS los conectados     |
 * ─────────────────────────────────────────────────────────────────────────
 * 
 * 🎯 Eventos que debes implementar:
 * - Escuchar: 'join', 'chat-message', 'disconnect'
 * - Emitir: 'message', 'user-joined', 'user-left'
 * 
 * 💡 Tips:
 * - El cliente se conecta desde http://localhost:5175 (configurar CORS)
 * - Cada socket tiene un socket.id único
 * - Guarda el username del usuario para usarlo en disconnect
 */

import express from 'express';
import { createServer } from 'node:http';
// TODO: Importar Server de socket.io
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer(app);

// TODO: Crear instancia de Socket.IO
// 💡 Pista: new Server(servidor, { cors: { origin: "...", methods: [...] } })


// TODO: Manejar conexiones de WebSocket con io.on('connection', ...)
// 
// Dentro del callback de connection debes:
// 
// 📌 1. Evento 'join' (cuando un usuario se une):
//    - Recibe: username (string)
//    - Guardar username en una variable para usarlo después
//    - Notificar a los DEMÁS usuarios con 'user-joined'
//    💡 Pista: usa socket.broadcast.emit()
// 
// 📌 2. Evento 'chat-message' (cuando llega un mensaje):
//    - Recibe: { username: string, text: string }
//    - Crear objeto mensaje con: id, username, text, timestamp
//    - Enviar a TODOS los usuarios con evento 'message'
//    💡 Pista: usa io.emit() para enviar a todos
// 
// 📌 3. Evento 'disconnect' (cuando alguien se desconecta):
//    - Notificar a los demás con 'user-left' (solo si tenía username)
//    💡 Pista: usa socket.broadcast.emit()


server.listen(3050, () => {
  console.log('Server Running in http://localhost:3050');
});