import React from 'react'
import ThemeToggle from './ThemeToggle'

import './styles.css'

const Header: React.FC = React.memo((): React.ReactElement => {
    return (
        <header className="header">
            <h1><i>TypeScript</i> TODO</h1>
            <ThemeToggle />
        </header>
    )
})

export default Header
