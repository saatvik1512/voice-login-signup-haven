import React, { useState } from "react";
import VoiceAuth from "../components/VoiceAuth";

const Index = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div 
        className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md space-y-6 hover:scale-105"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          transform: "perspective(1000px) rotateX(5deg)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-primary">Height Detection App</h1>
          <p className="text-primary/80">Authenticate with your voice</p>
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setMode("login")}
            className={`px-6 py-2 rounded-lg text-sm font-medium ${
              mode === "login"
                ? "bg-primary text-white shadow-lg"
                : "text-primary hover:bg-primary/10"
            }`}
            style={{
              transform: mode === "login" ? "perspective(1000px) translateZ(20px)" : "translateZ(0)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `${e.currentTarget.style.transform.replace("scale(1)", "")} scale(1.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = mode === "login" 
                ? "perspective(1000px) translateZ(20px) scale(1)" 
                : "translateZ(0) scale(1)";
            }}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-6 py-2 rounded-lg text-sm font-medium ${
              mode === "signup"
                ? "bg-primary text-white shadow-lg"
                : "text-primary hover:bg-primary/10"
            }`}
            style={{
              transform: mode === "signup" ? "perspective(1000px) translateZ(20px)" : "translateZ(0)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `${e.currentTarget.style.transform.replace("scale(1)", "")} scale(1.1)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = mode === "signup" 
                ? "perspective(1000px) translateZ(20px) scale(1)" 
                : "translateZ(0) scale(1)";
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