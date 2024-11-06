import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hello! I\'m MUSA-AI, your virtual assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        type: 'bot',
        content: 'Thank you for your message. I\'m a demo bot for now, but I\'ll be fully functional soon!',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-musa-blue text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-6 right-6 w-96 bg-white rounded-lg shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-musa-blue text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <h3 className="font-semibold">MUSA-AI Assistant</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`flex gap-2 max-w-[80%] ${
                  message.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user'
                      ? 'bg-musa-blue text-white'
                      : 'bg-gray-100 text-musa-blue'
                  }`}
                >
                  {message.type === 'user' ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5" />
                  )}
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-musa-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-musa-blue focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2 bg-musa-blue text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}