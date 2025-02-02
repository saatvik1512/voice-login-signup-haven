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
    <div className="flex flex-col items-center space-y-6 animate-fade-in">
      <p className="text-primary/80 text-sm">
        {mode === "login" ? "Login with your voice" : "Register with your voice"}
      </p>
      <RecordButton isRecording={isRecording} onClick={handleRecord} />
    </div>
  );
};

export default VoiceAuth;