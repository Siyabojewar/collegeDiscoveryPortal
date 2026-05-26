"use client";

import React, { useState, useEffect } from 'react';

export function Typewriter() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const phrases = [
    "Find the best colleges within India",
    "Find the best college according to your rank",
    "Compare colleges seamlessly"
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPaused) {
      // Pause for 1.5 seconds at the end of typing a phrase before deleting
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(timer);
    }

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Deleting text
      if (text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, 30); // Deletion speed
      }
    } else {
      // Typing text
      if (text === currentPhrase) {
        setIsPaused(true);
      } else {
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, 50); // Typing speed
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, isPaused, phraseIndex]);

  return (
    <div className="h-8 md:h-10 text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl font-light mx-auto flex items-center justify-center">
      <span className="inline-block min-h-[32px] md:min-h-[40px]">
        {text}
        <span className="animate-pulse ml-1 inline-block w-[2px] h-5 bg-blue-300 align-middle"></span>
      </span>
    </div>
  );
}
