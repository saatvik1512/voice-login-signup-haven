import React, { useState } from "react";
import VoiceAuth from "../components/VoiceAuth";

const Index = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-12 w-full max-w-md space-y-12">
        <div className="text-center space-y-2">
          <h1 className="text-[40px] font-semibold">
            <span className="text-[#E8D5C4]">Height Detection</span>{" "}
            <span className="text-primary">App</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg">Authenticate with your voice</p>
        </div>
        
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setMode("login")}
            className={`px-8 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
              mode === "login"
                ? "bg-primary text-white animate-glow"
                : "text-[#9CA3AF] hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`px-8 py-3 rounded-2xl text-base font-medium transition-all duration-300 ${
              mode === "signup"
                ? "bg-primary text-white animate-glow"
                : "text-[#9CA3AF] hover:text-white"
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