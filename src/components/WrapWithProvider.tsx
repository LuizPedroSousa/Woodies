import React from 'react'
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import globalStyle from '../styles/global'
import { ThemeProvider, ThemeConsumer } from '../contexts/Theme/provider'
import { WrapRootElementBrowserArgs } from 'gatsby'
import { SmoothScrollProvider } from '../contexts/SmoothScroll/provider'

const WrapWithProvider: React.FC<WrapRootElementBrowserArgs> = ({
    element
}) => {
    return (
        <ThemeProvider>
            <ThemeConsumer>
                {({ theme }) => (
                    <EmotionThemeProvider theme={theme}>
                        <SmoothScrollProvider>
                            <Global styles={globalStyle(theme)} />
                            {element}
                        </SmoothScrollProvider>
                    </EmotionThemeProvider>
                )}
            </ThemeConsumer>
        </ThemeProvider>
    )
}

export default WrapWithProvider
