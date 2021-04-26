import { Theme } from '@emotion/react'
import { createContext } from 'react'

interface ThemeContextProps {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContextProps)

export default ThemeContext
