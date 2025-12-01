import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5175",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('Client Connected:', socket.id);
  
  let currentUsername = '';

  // Cuando un usuario se une al chat
  socket.on('join', (username: string) => {
    currentUsername = username;
    console.log(`${username} joined the chat`);
    socket.broadcast.emit('user-joined', username);
  });

  // Cuando se recibe un mensaje
  socket.on('chat-message', (data: { username: string; text: string }) => {
    const message = {
      id: `${socket.id}-${Date.now()}`,
      username: data.username,
      text: data.text,
      timestamp: new Date()
    };
    io.emit('message', message);
  });

  // Cuando un usuario se desconecta
  socket.on('disconnect', () => {
    if (currentUsername) {
      console.log(`${currentUsername} left the chat`);
      socket.broadcast.emit('user-left', currentUsername);
    }
  });
});

server.listen(3050, () => {
  console.log('Server Running in http://localhost:3050');
});