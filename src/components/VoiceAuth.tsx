import React, { useState } from "react";
import { useConversation } from "@11labs/react";
import RecordButton from "./RecordButton";
import { toast } from "sonner";

interface VoiceAuthProps {
  mode: "login" | "signup";
}

const VoiceAuth = ({ mode }: VoiceAuthProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const conversation = useConversation();

  const handleRecord = async () => {
    try {
      setIsRecording(true);
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start recording logic here
      const conversationId = await conversation.startSession({
        agentId: "your_agent_id", // You'll need to replace this with your actual agent ID
      });

      // For demo purposes, we'll simulate a recording duration
      setTimeout(() => {
        setIsRecording(false);
        toast.success(
          mode === "login"
            ? "Voice authentication successful!"
            : "Voice registration complete!"
        );
      }, 3000);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast.error("Could not access microphone. Please check your permissions.");
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800">
        {mode === "login" ? "Login with Voice" : "Register Your Voice"}
      </h2>
      <p className="text-gray-600 text-center max-w-md">
        {mode === "login"
          ? "Please speak to authenticate your identity"
          : "Please speak to register your voice signature"}
      </p>
      <RecordButton isRecording={isRecording} onClick={handleRecord} />
      <p className="text-sm text-gray-500">
        {isRecording ? "Listening..." : "Click the microphone to start"}
      </p>
    </div>
  );
};

export default VoiceAuth;