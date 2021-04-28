import { css, Theme } from '@emotion/react'
const globalStyle = (theme: Theme) => css`
    * {
        margin: 0;
        border: 0;
        padding: 0;
        transition: 0.25s;
    }

    body {
        background-color: ${theme.color.bg};
        font: 400 ${theme.fontSize.md} Nunito;
        color: ${theme.color.gray[700]};
    }

    ul,
    li {
        list-style: none;
    }
    button {
        cursor: pointer;
    }

    @media (min-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
`

export default globalStyle
