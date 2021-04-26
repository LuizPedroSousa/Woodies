import React from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import globalStyle from '../styles/global'
import { ThemeProvider, ThemeConsumer } from '../contexts/Theme/provider'
import { WrapRootElementBrowserArgs } from 'gatsby'

const WrapWithProvider: React.FC<WrapRootElementBrowserArgs> = ({
    element
}) => {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                {({ theme }) => (
                    <EmotionThemeProvider theme={theme}>
                        <Global styles={globalStyle(theme)} />
                        {element}
                    </EmotionThemeProvider>
                )}
            </ThemeConsumer>
        </ThemeProvider>
    )
}

export default WrapWithProvider
