/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react'
import light from '../../styles/themes/light'

type Light = typeof light
declare module '@emotion/react' {
    interface Theme extends Light {}
}
