import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export const useTypewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 2000,
}: UseTypewriterProps) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length === currentWord.length) {
          setIsWaiting(true);
        }
      }
    }, isDeleting ? deletingSpeed : isWaiting ? delayBetween : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isWaiting, wordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

  return text;
};