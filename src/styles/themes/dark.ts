import { Theme } from '@emotion/react'

const dark: Theme = {
    title: 'dark',
    color: {
        bg: '#FFFFFF',
        white: '#fff',
        gray: {
            50: '#AFAFAF',
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
            500: '#FFC107',
            700: '#DAA520',
            800: '#B48C2A'
        },
        cyan: {
            400: '#A8DCEC'
        }
    },
    fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        md: '1rem', // 16px
        lg: '1.5rem', // 24px
        xl: '2.25rem', // 36px
        '3xl': '3rem', // 48px
        '5xl': '4.5rem', // 72px
        '7xl': '6rem' // 96px
    },
    borderRadius: {
        xs: '4px',
        '2xs': '8px',
        sm: '10px',
        '2sm': '12px',
        md: '16px',
        lg: '24px'
    }
}

export default dark
