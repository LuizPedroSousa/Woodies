import { Theme } from '@emotion/react'

const dark: Theme = {
    title: 'dark',
    color: {
        bg: '#FFFFFF',
        gray: {
            400: '#222222',
            500: '#3E3F43',
            800: '#313235',
            900: '#000000'
        },
        pink: {
            400: '#F9BDBD'
        },
        yellow: {
            400: '#F7DEA6',
            700: '#DAA520'
        }
    },
    fontSize: {
        xs: '0.75rem', // 12
        sm: '0.875rem', // 14
        md: '1rem', // 16
        lg: '1.5rem', // 24
        xl: '2.25rem', // 32
        '4xl': '4.5rem'
    },
    borderRadius: {
        xs: '0.5rem', // 8px
        sm: '0.625rem', // 10px
        '2sm': '0.75rem', // 12px
        md: '1rem', // 16px
        lg: '1.5rem' // 24px
    }
}

export default dark
