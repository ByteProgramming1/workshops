import { useState, useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
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
  const socketRef = useRef<Socket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isJoined) {
      const newSocket = io('http://localhost:3050')
      socketRef.current = newSocket

      newSocket.on('message', (msg: Message) => {
        setMessages(prev => [...prev, msg])
      })

      newSocket.on('user-joined', (name: string) => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          username: 'Sistema',
          text: `${name} se ha unido al chat`,
          timestamp: new Date()
        }])
      })

      newSocket.on('user-left', (name: string) => {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          username: 'Sistema',
          text: `${name} ha salido del chat`,
          timestamp: new Date()
        }])
      })

      newSocket.emit('join', username)

      return () => {
        newSocket.disconnect()
      }
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
    if (message.trim() && socketRef.current) {
      socketRef.current.emit('chat-message', {
        username,
        text: message
      })
      setMessage('')
    }
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
