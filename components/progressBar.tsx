"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  text: string;
  value: number;
  isVisible: boolean; // to control animation
}

const ProgressBar: FC<ProgressBarProps> = ({ text, value, isVisible }) => {
  return (
    <div className="mb-4">
      <span className="block font-semibold text-lg mb-1">
        {text} <i className="ml-2">{value}%</i>
      </span>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div
          className="bg-green-500 h-3 rounded-full"
          initial={{ width: "0%" }} // Start at 0%
          animate={{ width: isVisible ? `${value}%` : "0%" }} // Animate when isvisible-true
          transition={{ duration: 1.5, ease: "easeOut" }} 
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
