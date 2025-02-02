import React, { useState } from "react";
import VoiceAuth from "../components/VoiceAuth";

const Index = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-8 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold text-primary">Height Detection App</h1>
          <p className="text-primary/80">Authenticate with your voice</p>
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setMode("login")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "login"
                ? "bg-primary text-white"
                : "text-primary hover:bg-primary/10"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
              mode === "signup"
                ? "bg-primary text-white"
                : "text-primary hover:bg-primary/10"
            }`}
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