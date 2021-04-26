import React from 'react'
import { Theme } from '@emotion/react'
import usePersistedState from '../../hooks/usePersistedState'
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

import ThemeContext from './context'

const { Provider, Consumer } = ThemeContext

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = usePersistedState<Theme>(light, 'theme')

    const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

    return <Provider value={{ theme, toggleTheme }}>{children}</Provider>
}

export { ThemeProvider, Consumer as ThemeConsumer }
