// src/views/freelancer/FreelancerMessages.js
import React, { useState } from 'react';
import FreelancerMenu from './FreelancerMenu';
import './FreelancerMessages.css';

// Datos de ejemplo: solicitudes pendientes con conversaciones iniciales.
const dummyConversations = [
  {
    id: 1,
    title: "Consulta: Desarrollo Web",
    messages: [
      { id: 1, text: "Hola, tengo una duda sobre el requerimiento.", sender: "client" },
      { id: 2, text: "Claro, dime en qué puedo ayudar.", sender: "freelancer" },
    ],
  },
  {
    id: 2,
    title: "Consulta: Diseño UX/UI",
    messages: [
      { id: 1, text: "¿Cuáles son los tiempos que manejas?", sender: "client" },
      { id: 2, text: "El proyecto se estima en 4 semanas.", sender: "freelancer" },
    ],
  },
];

const FreelancerMessages = () => {
  const [conversations, setConversations] = useState(dummyConversations);
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!activeConversation || !newMessage.trim()) return;

    // Crear un nuevo mensaje de tipo "freelancer"
    const newMsg = {
      id: activeConversation.messages.length + 1,
      text: newMessage,
      sender: "freelancer",
    };

    // Actualizar la conversación con el nuevo mensaje
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === activeConversation.id) {
        return { ...conv, messages: [...conv.messages, newMsg] };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setNewMessage("");
  };

  return (
    <div className="messages-wrapper">
      {/* Menú base reutilizable */}
      <FreelancerMenu />

      <div className="messages-container">
        {/* Sidebar con solicitudes pendientes */}
        <div className="sidebar">
          <h3>Solicitudes Pendientes</h3>
          <ul>
            {conversations.map((conv) => (
              <li
                key={conv.id}
                className={conv.id === activeConversationId ? "active" : ""}
                onClick={() => setActiveConversationId(conv.id)}
              >
                {conv.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Área de chat */}
        <div className="chat-area">
          {activeConversation ? (
            <>
              <h3>{activeConversation.title}</h3>
              <div className="chat-messages">
                {activeConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-message ${msg.sender === "freelancer" ? "sent" : "received"}`}
                  >
                    <p>{msg.text}</p>
                  </div>
                ))}
              </div>
              <form className="chat-input" onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type="submit">Enviar</button>
              </form>
            </>
          ) : (
            <div className="no-selection">
              <p>Selecciona una solicitud pendiente para comenzar a chatear.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancerMessages;