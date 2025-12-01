/**
 * ============================================
 * 🚀 TALLER: Implementación de WebSockets (Cliente)
 * ============================================
 * 
 * En este archivo implementarás la conexión del cliente a WebSockets usando Socket.IO.
 * 
 * 📚 API de Socket.IO (Cliente):
 * ─────────────────────────────────────────────
 * | Método                      | Descripción                                    |
 * |-----------------------------|------------------------------------------------|
 * | io('url')                   | Conectar al servidor WebSocket                 |
 * | socket.on('evento', fn)     | Escuchar un evento del servidor                |
 * | socket.emit('evento', data) | Enviar un evento al servidor                   |
 * | socket.disconnect()         | Cerrar la conexión                             |
 * ─────────────────────────────────────────────
 * 
 * 🎯 Eventos que debes implementar:
 * - Escuchar: 'message', 'user-joined', 'user-left'
 * - Emitir: 'join', 'chat-message'
 * 
 * 💡 Tip: El servidor corre en http://localhost:3050
 * 
 * La UI ya está implementada, solo debes completar la lógica de conexión.
 */

import { useState, useEffect, useRef } from 'react'
// TODO: Importar io y Socket de socket.io-client
import './App.css'

interface Message {
  id: string
  username: string
  text: string
  timestamp: Date
}

function App() {
  const [username, setUsername] = useState('')
  const [isJoined, setIsJoined] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  // TODO: Crear una referencia para almacenar la instancia del socket
  // 💡 Pista: useRef<Socket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isJoined) {
      // TODO: Implementar conexión WebSocket
      // 
      // 📌 1. Conectar al servidor:
      //    const socket = io('http://localhost:3050')
      //    Guardar en socketRef.current
      // 
      // 📌 2. Escuchar evento 'message':
      //    - Recibe: objeto Message { id, username, text, timestamp }
      //    - Agregar al estado con: setMessages(prev => [...prev, msg])
      // 
      // 📌 3. Escuchar evento 'user-joined':
      //    - Recibe: nombre del usuario (string)
      //    - Crear mensaje del sistema y agregarlo al estado
      //    💡 Pista: { id: Date.now().toString(), username: 'Sistema', text: `${name} se ha unido`, timestamp: new Date() }
      // 
      // 📌 4. Escuchar evento 'user-left':
      //    - Similar a user-joined pero con mensaje de salida
      // 
      // 📌 5. Emitir 'join' con el username para unirse al chat
      // 
      // 📌 6. Cleanup: retornar función que llame socket.disconnect()
    }
  }, [isJoined, username])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      setIsJoined(true)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Enviar mensaje al servidor
    // 📌 Pasos:
    //    1. Verificar que message.trim() no esté vacío Y socketRef.current exista
    //    2. Emitir evento 'chat-message' con { username, text: message }
    //    3. Limpiar el input con setMessage('')
  }

  if (!isJoined) {
    return (
      <div className="join-container">
        <h1>💬 Byte Chat</h1>
        <form onSubmit={handleJoin} className="join-form">
          <input
            type="text"
            placeholder="Ingresa tu nombre..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="join-input"
            autoFocus
          />
          <button type="submit" className="join-button">
            Unirse al Chat
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>💬 Byte Chat</h2>
        <span className="username-badge">Conectado como: {username}</span>
      </div>

      <div className="messages-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.username === username ? 'own-message' : ''} ${msg.username === 'Sistema' ? 'system-message' : ''}`}
          >
            {msg.username !== 'Sistema' && (
              <span className="message-username">{msg.username}</span>
            )}
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
          autoFocus
        />
        <button type="submit" className="send-button">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default App
