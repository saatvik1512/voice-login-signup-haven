import React, { useState } from "react";
import VoiceAuth from "../components/VoiceAuth";

const Index = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div 
        className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md space-y-6"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          transform: "perspective(1000px) rotateX(5deg)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-primary">Height Detection App</h1>
          <p className="text-primary/80">Authenticate with your voice</p>
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setMode("login")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 active:scale-95 ${
              mode === "login"
                ? "bg-primary text-white shadow-lg"
                : "text-primary hover:bg-primary/10"
            }`}
            style={{
              transform: mode === "login" ? "perspective(1000px) translateZ(20px)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 active:scale-95 ${
              mode === "signup"
                ? "bg-primary text-white shadow-lg"
                : "text-primary hover:bg-primary/10"
            }`}
            style={{
              transform: mode === "signup" ? "perspective(1000px) translateZ(20px)" : "none",
              transition: "all 0.3s ease",
            }}
          >
            Sign Up
          </button>
        </div>
        
        <VoiceAuth mode={mode} />
      </div>
    </div>
  );
};

export default Index;