'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hi! I\'m your AI health assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Thank you for your question! This is a prototype - AI responses will be available in the full version of VisionPulsePoint.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full flex items-center justify-center glow-purple z-40"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-slate-900/95 backdrop-blur-md rounded-2xl border border-purple-500/30 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800 text-gray-200 border border-purple-500/20'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-purple-500/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800 border border-purple-500/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}