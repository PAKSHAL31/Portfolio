'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "./ui/button"
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

    return (
        <Button
          size='sm'
          variant= 'link'
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
        >
             {resolvedTheme === 'dark' ?  <FaToggleOn /> : <FaToggleOff />}
              <span className='sr-only'>Toggle theme</span>
              </Button>
            ) 
}

export default ThemeToggle
