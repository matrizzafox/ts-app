import React from 'react'
import ThemeToggle from './ThemeToggle'

import './styles.css'

const Header: React.FC = React.memo((): React.ReactElement => {
    return (
        <header className="header">
            <p><b>GitHub:</b> <a target="__blank" href="https://github.com/matrizzafox/ts-app">github.com/matrizzafox/ts-app</a></p>
            <h1><i>TypeScript</i> TODO</h1>
            <ThemeToggle />
        </header>
    )
})

export default Header
