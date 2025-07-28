import React from 'react';

const Chat = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, user: 'John Doe', message: 'Hey everyone! How are you doing?', time: '10:30 AM', isOwn: false },
    { id: 2, user: 'You', message: 'Hi John! I\'m doing great, thanks for asking!', time: '10:32 AM', isOwn: true },
    { id: 3, user: 'Jane Smith', message: 'Good morning! Ready for today\'s meeting?', time: '10:35 AM', isOwn: false },
    { id: 4, user: 'You', message: 'Absolutely! I\'ve prepared all the materials.', time: '10:37 AM', isOwn: true },
  ]);
  
  const [newMessage, setNewMessage] = React.useState('');
  const [activeUsers] = React.useState([
    { id: 1, name: 'John Doe', status: 'online' },
    { id: 2, name: 'Jane Smith', status: 'online' },
    { id: 3, name: 'Mike Johnson', status: 'away' },
    { id: 4, name: 'Sarah Wilson', status: 'offline' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-success';
      case 'away': return 'bg-warning';
      case 'offline': return 'bg-base-300';
      default: return 'bg-base-300';
    }
  };

  return (
    <div className="h-screen flex bg-base-100">
      {/* Sidebar */}
      <div className="w-80 bg-base-200 border-r border-base-300 flex flex-col">
        <div className="p-4 border-b border-base-300">
          <h2 className="text-xl font-bold text-primary">ChatKaro</h2>
          <p className="text-sm text-base-content opacity-70">General Chat</p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-base-content mb-4">Online Users ({activeUsers.filter(u => u.status === 'online').length})</h3>
            <div className="space-y-2">
              {activeUsers.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-base-300 cursor-pointer transition-colors">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-content font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-base-200 ${getStatusColor(user.status)}`}></div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-base-content">{user.name}</p>
                    <p className="text-xs text-base-content opacity-60 capitalize">{user.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-base-200 border-b border-base-300">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-base-content">General Chat</h1>
              <p className="text-sm text-base-content opacity-70">{activeUsers.filter(u => u.status === 'online').length} members online</p>
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-ghost btn-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="btn btn-ghost btn-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="btn btn-ghost btn-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`chat ${message.isOwn ? 'chat-end' : 'chat-start'}`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-semibold">
                  {message.user.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <div className="chat-header">
                {message.user}
                <time className="text-xs opacity-50 ml-2">{message.time}</time>
              </div>
              <div className={`chat-bubble ${message.isOwn ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}>
                {message.message}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-base-200 border-t border-base-300">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="input input-bordered flex-1 focus:input-primary"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!newMessage.trim()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
