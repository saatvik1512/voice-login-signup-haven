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
      className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
        isRecording
          ? "bg-red-500 hover:bg-red-600"
          : "bg-primary hover:bg-primary-hover"
      }`}
    >
      {isRecording && (
        <span className="absolute w-full h-full rounded-full animate-pulse-ring bg-red-500" />
      )}
      <Mic
        className={`w-8 h-8 text-white ${isRecording ? "animate-pulse" : ""}`}
      />
    </button>
  );
};

export default RecordButton;