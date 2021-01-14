import React from 'react'

import { Context } from '../../helpers/context'
import { BsSun, BsMoon } from 'react-icons/bs'

const ThemeToggle: React.FC = (): React.ReactElement => {

    const { theme, toggleTheme } = React.useContext(Context)

    const handleToggleTheme = () => {
        if(toggleTheme)
        if(theme === 'dark') {
            document.querySelector("meta[name=theme-color]")?.setAttribute("content", '#f5f5f5')
            toggleTheme('light')
        } else {
            document.querySelector("meta[name=theme-color]")?.setAttribute("content", '#222831')
            toggleTheme('dark')
        }
    }

    return (
        <div className="theme-toggle" onClick={handleToggleTheme}>
            { theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} /> }
        </div>
    )
}

export default ThemeToggle