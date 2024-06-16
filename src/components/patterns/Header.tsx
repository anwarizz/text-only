import { Link } from "react-router-dom"
import DarkModeIcon from "../atoms/DarkModeIcon"
import LightModeIcon from "../atoms/LightModeIcon";
import { useState } from 'react';

export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode)
      }

  return (
    <header className="flex justify-between font-medium h-10 pt-14 pb-10 text-[14px] items-center font-inter">
        <div className="flex gap-4 items-center">
            <button onClick={toggleDarkMode} className="w-6 h-6 border border-gray-400 dark:border-gray-400 rounded-md p-1">
                {isDarkMode ? <DarkModeIcon/> : <LightModeIcon />}
            </button>
            <h2 className="font font-bold">Only Text</h2>
        </div>
        <nav className="flex gap-5 items-center">
            <Link to='/'>Home</Link>
            <Link to="/write" className="underline">Start writing</Link>
        </nav>
    </header>
  )
}
