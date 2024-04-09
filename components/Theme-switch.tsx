'use client'

import * as React from "react"
import { MoonStar, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../components/ui/button"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()


  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
        <Sun className="h-[1.2rem] w-[1.2rem] dark:opacity-100 opacity-0 hidden dark:block transition-opacity" />
        <MoonStar className="h-[1.2rem] w-[1.2rem] opacity-100 dark:opacity-0 rotate-0 dark:rotate-90 dark:hidden block" />
    </Button>
  )
}