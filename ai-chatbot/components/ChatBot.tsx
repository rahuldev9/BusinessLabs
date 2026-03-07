"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Trash2 } from "lucide-react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  reaction?: "like" | "dislike" | "report";
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Load chat history
  useEffect(() => {
    const saved = localStorage.getItem("chatHistory");

    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        {
          id: Date.now(),
          text: "Hello 👋 I'm your AI assistant. Ask me anything!",
          sender: "bot",
        },
      ]);
    }
  }, []);

  // Save history + auto scroll
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // AI Logic
  const botLogic = (text: string) => {
    const msg = text.toLowerCase().trim();

    const responses = [
      {
        keywords: ["hello", "hi", "hey", "good morning", "good evening"],
        reply:
          "Hello 👋 Welcome! I'm here to help. You can ask about our services, pricing, or how to get started.",
      },
      {
        keywords: ["price", "pricing", "cost", "plans"],
        reply:
          "💰 Our pricing starts from $10/month. We also offer custom plans depending on your project needs.",
      },
      {
        keywords: ["service", "services", "what do you do", "offer"],
        reply:
          "🚀 We specialize in building modern websites, web applications, and AI-powered chatbots for businesses.",
      },
      {
        keywords: ["ai", "chatbot", "automation"],
        reply:
          "🤖 Our AI chatbots can automate customer support, answer FAQs, and integrate with your website or apps.",
      },
      {
        keywords: ["website", "web development", "build website"],
        reply:
          "🌐 We design and develop fast, modern, and responsive websites tailored for businesses and startups.",
      },
      {
        keywords: ["contact", "email", "reach you"],
        reply:
          "📩 You can contact us at support@example.com and we will respond as soon as possible.",
      },
      {
        keywords: ["help", "support"],
        reply:
          "I'm here to help! You can ask about:\n• Services\n• Pricing\n• Website development\n• AI chatbots\n• Contact information",
      },
    ];

    for (const item of responses) {
      if (item.keywords.some((keyword) => msg.includes(keyword))) {
        return item.reply;
      }
    }

    return "🤔 I'm not sure I understood that. You can ask about our services, pricing, AI chatbots, or contact details.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: botLogic(input),
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 900);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const deleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const react = (id: number, type: "like" | "dislike" | "report") => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, reaction: type } : m)),
    );
  };

  const clearChat = () => {
    localStorage.removeItem("chatHistory");
    setMessages([
      {
        id: Date.now(),
        text: "Chat cleared. How can I help you?",
        sender: "bot",
      },
    ]);
  };

  return (
    <div className="w-full max-w-md h-[85vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/60">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center font-bold shadow">
            AI
          </div>

          <div>
            <p className="font-semibold">AI Assistant</p>
            <p className="text-xs opacity-80">online</p>
          </div>
        </div>

        <button
          onClick={clearChat}
          className="flex items-center gap-1 text-xs bg-white/20 px-3 py-1.5 rounded-lg hover:bg-white/30 transition"
        >
          <Trash2 size={14} />
          Clear
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-blue-50">
        {messages.map((m) => (
          <MessageBubble
            key={m.id}
            message={m}
            onDelete={deleteMessage}
            onReact={react}
          />
        ))}

        {typing && <TypingIndicator />}

        <div ref={bottomRef}></div>
      </div>

      {/* Input */}
      <div className="p-3 bg-white/80 backdrop-blur-xl">
        <div className="flex items-end gap-2 bg-white rounded-2xl shadow px-3 py-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask AI something..."
            rows={1}
            className="flex-1 resize-none p-2 outline-none bg-transparent text-sm max-h-32"
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 active:scale-95 transition disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
