'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import myImage from '@/public/images/Pakshal_Photo.jpg'

const Photo = () => {
  return (
    <div className='flex items-center justify-center relative'>
      <div className='h-[298px] w-[298px] xl:h-[498px] xl:w-[498px] rounded-full relative'>
        
        {/* Animated Dashed Circle */}
        <motion.svg
          className='absolute -top-4 -left-4'  // Adjust position
          width="calc(100% + 32px)"  // Ensure extra space
          height="calc(100% + 32px)"
          viewBox="0 0 140 140"  // Increase viewBox for proper spacing
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            rotate: [0, 360],  // Full rotation
          }}
          transition={{
            repeat: Infinity,
            duration: 7,  // Slower animation
            ease: "easeInOut",
            delay: 2,
            repeatType: 'reverse'

          }}
        >
          <circle
            cx="70" cy="70" r="68"  // Centered properly
            fill="none"
            stroke="#4CAF50"
            strokeWidth="2"  // Adjusted thickness
            strokeDasharray="40 30"  // Fewer dashes
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Profile Image */}
        <Image
          src={myImage}
          alt='Pakshal Ranawat'
          priority
          quality={100}
          className='rounded-full object-fill h-full w-full aspect-square'
        />
      </div>
    </div>
  )
}

export default Photo
