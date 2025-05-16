'use client'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string[]; // depending on how many lines.
  className?: string;
}

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      variants={container} 
      initial="hidden" 
      animate="visible"
      className={`flex flex-col text-center xl:text-left ${className}`}
    >
      {text.map((line, lineIndex) => (
        <div key={lineIndex} className="flex justify-center xl:justify-start">
          {Array.from(line).map((char, index) => (
            <motion.span key={index} variants={letter} className="text-green-500 text-[40px] xl:text-[72px] font-bold">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
