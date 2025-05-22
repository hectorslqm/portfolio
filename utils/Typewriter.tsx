import { useState, useEffect } from "react";

const Typewriter = ({
  text,
  speed = 100,
  showCursor = true,
  cursorChar = "_"
}: {
  text: string;
  speed?: number;
  showCursor?: boolean;
  cursorChar?: string;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    // Reset cuando cambie el texto
    setDisplayed("");
    setIsTyping(true);
    setShowCursorState(true);

    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        // Hacer desaparecer el cursor después de un breve delay
        setTimeout(() => {
          setShowCursorState(false);
        }, 500);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="relative inline-block">
      {displayed}
      {showCursor && showCursorState && (
        <span
          className={`inline-block ${isTyping ? 'animate-pulse' : 'animate-ping'}`}
          style={{
            animation: isTyping
              ? 'blink 1s infinite'
              : 'blink 0.5s infinite'
          }}
        >
          {cursorChar}
        </span>
      )}
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default Typewriter;