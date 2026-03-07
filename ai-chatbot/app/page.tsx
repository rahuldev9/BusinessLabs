"use client";
import ChatBot from "@/components/ChatBot";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#050b18] overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#0f1c33_1px,transparent_1px),linear-gradient(to_bottom,#0f1c33_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* Scanning horizontal lines */}
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-40"
      />

      {/* Floating neon particles */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"
      />

      {/* center glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"
      />

      {/* Chatbot */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md"
      >
        <ChatBot />
      </motion.div>
    </main>
  );
}
