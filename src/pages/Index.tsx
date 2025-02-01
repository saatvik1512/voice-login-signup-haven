import React, { useState } from "react";
import VoiceAuth from "../components/VoiceAuth";

const Index = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-white p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-secondary p-1">
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === "login"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === "signup"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
        <VoiceAuth mode={mode} />
      </div>
    </div>
  );
};

export default Index;