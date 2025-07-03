import React, { useState, useRef, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    // Simulate bot response (for UI only)
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: 'bot', text: "I'm just a demo bot!" }]);
    }, 800);
  };

  return (

    <div className="d-flex flex-column justify-content-end my-3 mx-4" style={{ display: 'flex', flexDirection: 'column', height: '100%', maxHeight: '70vh', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', background: '#f3efe3', padding: 0 }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 16px 8px 16px', background: '#f7f7f9', borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: '#f3efe3' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: 12 }}>
            <div style={{
              maxWidth: '70%',
              padding: '10px 16px',
              borderRadius: 18,
              background: msg.sender === 'user' ? '#d1e7dd' : '#e2e3e5',
              color: '#222',
              fontSize: 16,
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className='my-3 mx-5'>
      <form onSubmit={handleSend} style={{ display: 'flex', padding: 16, borderTop: '1px solid #eee', background: '#fff', backgroundColor: '#f3efe3', borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: '10px 16px', borderRadius: 24, border: '1px solid #ccc', fontSize: 16, outline: 'none', marginRight: 8 }}
        />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: 24, border: 'none', background: '#6c63ff', color: '#fff', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>
          Send
        </button>
      </form>
      </div>
    </div>
  );
}
