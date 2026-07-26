import { useState, useEffect } from 'react';

interface TypewriterTitleProps {
  title?: string;
}

export function TypewriterTitle({ title = 'Full Stack Developer' }: TypewriterTitleProps) {
  // Extract prefix and words to cycle
  // Example title: "Full Stack Developer | AI Engineer"
  const rawParts = title.split('|').map((s) => s.trim()).filter(Boolean);

  let prefix = 'Full Stack ';
  let words = ['Developer', 'AI Engineer', 'Architect'];

  if (rawParts.length > 0) {
    const firstTitleWords = rawParts[0].split(' ');
    if (firstTitleWords.length > 1) {
      prefix = firstTitleWords.slice(0, -1).join(' ') + ' ';
      const lastWord = firstTitleWords[firstTitleWords.length - 1];
      const otherWords = rawParts.slice(1).map((p) => p.trim());
      words = [lastWord, ...otherWords];
    } else {
      prefix = '';
      words = rawParts;
    }
  }

  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex % words.length];

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText !== targetWord) {
      // Type next character
      timer = setTimeout(() => {
        setCurrentText(targetWord.substring(0, currentText.length + 1));
      }, 110);
    } else if (!isDeleting && currentText === targetWord) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText !== '') {
      // Delete previous character
      timer = setTimeout(() => {
        setCurrentText(targetWord.substring(0, currentText.length - 1));
      }, 55);
    } else if (isDeleting && currentText === '') {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] font-display text-left">
      <span className="text-white">{prefix}</span>
      <span className="inline-block bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-purple bg-clip-text text-transparent pb-1">
        {currentText}
      </span>
      <span className="inline-block text-brand-cyan animate-pulse font-light ml-0.5 select-none">
        |
      </span>
    </h1>
  );
}
