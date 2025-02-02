import React from "react";
import { Mic } from "lucide-react";

interface RecordButtonProps {
  isRecording: boolean;
  onClick: () => void;
}

const RecordButton = ({ isRecording, onClick }: RecordButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300
        ${isRecording ? "bg-primary/80" : "bg-primary"} 
        hover:bg-primary-hover animate-glow`}
    >
      {isRecording && (
        <span className="absolute w-full h-full rounded-full animate-pulse-ring bg-primary/30" />
      )}
      <Mic className={`w-10 h-10 text-white ${isRecording ? "animate-pulse" : ""}`} />
    </button>
  );
};

export default RecordButton;