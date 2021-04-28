import { Theme } from '@emotion/react'

const dark: Theme = {
    title: 'dark',
    color: {
        bg: '#FFFFFF',
        white: '#fff',
        gray: {
            100: 'rgba(34, 34, 34, 0.1)',
            500: '#3E3F43',
            600: '#313235',
            700: 'rgba(34, 34, 34, 0.75)',
            900: '#000000'
        },
        pink: {
            400: '#F9BDBD'
        },
        yellow: {
            400: '#F7DEA6',
            700: '#DAA520',
            800: '#B48C2A'
        },
        cyan: {
            400: '#A8DCEC'
        }
    },
    fontSize: {
        xs: '0.75rem', // 12
        sm: '0.875rem', // 14
        md: '1rem', // 16
        lg: '1.5rem', // 24
        xl: '2.25rem', // 36
        '3xl': '3rem', // 48
        '5xl': '4.5rem' // 72
    },
    borderRadius: {
        xs: '0.25rem', // 4px
        '2xs': '0.5rem', // 8px
        sm: '0.625rem', // 10px
        '2sm': '0.75rem', // 12px
        md: '1rem', // 16px
        lg: '1.5rem' // 24px
    }
}

export default dark
