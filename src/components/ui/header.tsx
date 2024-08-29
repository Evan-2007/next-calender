import React from 'react'
import { ModeToggle } from '../theme-toggle'
export function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-card  border-border border-b ">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-gray-100">Lorem Ipsum</a>
            <nav>
                <ul className="flex space-x-4">
                    <li><ModeToggle /></li>

                </ul>
            </nav>
        </header>
    )
}