"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, Flag, Send } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  reaction?: "like" | "dislike" | "report";
};

type Props = {
  message: Message;
  onDelete: (id: number) => void;
  onReact: (id: number, type: "like" | "dislike" | "report") => void;
};

export default function MessageBubble({ message, onDelete, onReact }: Props) {
  const isUser = message.sender === "user";

  const [showReportBox, setShowReportBox] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleReaction = (type: "like" | "dislike" | "report") => {
    if (type === "report") {
      setShowReportBox(true);
    } else {
      onReact(message.id, type);
    }
  };

  const submitReport = () => {
    onReact(message.id, "report");
    setShowReportBox(false);
    setFeedback("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
    >
      {/* MESSAGE ROW */}
      <div className="flex gap-2">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
            AI
          </div>
        )}

        {/* MESSAGE BUBBLE */}
        <div
          className={`max-w-[75%] px-4 py-3 rounded-2xl border-none text-sm shadow-md ${
            isUser
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
              : "bg-white text-gray-800 border"
          }`}
        >
          {message.text}
        </div>

        {isUser && (
          <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold">
            U
          </div>
        )}
      </div>

      {/* REACTION / REPORT AREA */}
      {!isUser && (
        <div className="mt-2 ml-10">
          {/* REPORT INPUT */}
          {showReportBox ? (
            <div className="flex items-center gap-2 w-full">
              <input
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && feedback.trim()) {
                    submitReport();
                  }
                }}
                placeholder="Send feedback..."
                className="flex-1 text-xs border border-gray-300 rounded-md px-3 py-1.5 outline-none focus:ring-2 focus:ring-red-400"
              />

              <button
                onClick={submitReport}
                className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
              >
                <Send size={14} />
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              {/* LIKE */}
              {(!message.reaction || message.reaction === "like") && (
                <button
                  onClick={() => handleReaction("like")}
                  className={`p-1 rounded hover:bg-gray-100 ${
                    message.reaction === "like" ? "text-green-600" : ""
                  }`}
                >
                  <ThumbsUp
                    size={16}
                    fill={message.reaction === "like" ? "currentColor" : "none"}
                  />
                </button>
              )}

              {/* DISLIKE */}
              {(!message.reaction || message.reaction === "dislike") && (
                <button
                  onClick={() => handleReaction("dislike")}
                  className={`p-1 rounded hover:bg-gray-100 ${
                    message.reaction === "dislike" ? "text-red-600" : ""
                  }`}
                >
                  <ThumbsDown
                    size={16}
                    fill={
                      message.reaction === "dislike" ? "currentColor" : "none"
                    }
                  />
                </button>
              )}

              {/* REPORT */}
              {(!message.reaction || message.reaction === "report") && (
                <button
                  onClick={() => handleReaction("report")}
                  className={`p-1 rounded hover:bg-gray-100 ${
                    message.reaction === "report" ? "text-yellow-600" : ""
                  }`}
                >
                  <Flag
                    size={16}
                    fill={
                      message.reaction === "report" ? "currentColor" : "none"
                    }
                  />
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
