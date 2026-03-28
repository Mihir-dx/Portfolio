import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      setDisplayText((prev) => prev.slice(0, -1));
      if (displayText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      setDisplayText(currentPhrase.slice(0, displayText.length + 1));
    }
  }, [displayText, isDeleting, phraseIndex, phrases]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const isComplete = !isDeleting && displayText === currentPhrase;

    const timeout = setTimeout(
      tick,
      isComplete ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed
    );

    if (isComplete) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => {
        clearTimeout(timeout);
        clearTimeout(pauseTimeout);
      };
    }

    return () => clearTimeout(timeout);
  }, [tick, displayText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}
