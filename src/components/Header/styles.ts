import styled from '@emotion/styled'

import { motion } from 'framer-motion'

interface HeaderContainerProps {
    hasViewMenu: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    padding: 1.25rem;
    div {
        display: flex;
        align-items: center;
        h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
            font-weight: bold;
            margin-left: 1rem;
            letter-spacing: 0.25rem;
        }
    }
    nav {
        ul {
            z-index: 4;
            background-color: ${({ theme: { color } }) => color.white};
            margin-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid
                ${({ theme: { color } }) => color.gray[500]};
            position: absolute;
            left: 0;
            width: 100%;
            display: ${({ hasViewMenu }) => (hasViewMenu ? 'flex' : 'none')};
            align-items: center;
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90%;
                border-bottom: 1px solid
                    ${({ theme: { color } }) => color.gray[100]};
                &:last-child {
                    background-color: inherit;
                    margin-top: 1rem;
                    a {
                        text-transform: uppercase;
                        font-weight: 800;
                        background-size: 200%;
                        height: 1.875rem;
                        border: 1px solid
                            ${({ theme: { color } }) => color.gray[500]};
                        padding: 0.625rem;
                        border-radius: ${({ theme: { borderRadius } }) =>
                            borderRadius.xs};
                    }
                }
            }
            flex-direction: column;
        }
    }

    // 768px
    @media (min-width: 48em) {
        padding-left: 2rem;
        h2 {
            display: none;
        }
        nav {
            width: max-content;
            ul {
                border: 0;
                padding-bottom: 0;
                margin-top: 0;
                flex-direction: row;
                position: relative;
                display: flex;
                li {
                    width: max-content;
                    margin-top: 0 !important;
                    border: 0;
                    & + li {
                        margin-left: 0.5rem;
                    }
                    &:last-child {
                        width: 137px !important;
                    }
                }
            }
        }
    }

    // 992px
    @media (min-width: 62em) {
        padding-left: 5rem;
        h2 {
            display: block;
        }
        nav {
            ul {
                background-color: inherit;
                li {
                    width: max-content;
                }
            }
        }
    }

    // 1280px
    @media (min-width: 80em) {
        padding-left: 6.25rem;
        ul {
            li {
                padding: 0.5rem;
            }
        }
    }
`

export const Hamburger = styled(motion.button)`
    color: ${({ theme: { color } }) => color.gray[500]};
    width: 2rem;
    background-color: inherit;
    font-size: 0;
    height: 2rem;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.xs};
    border: 1px solid ${({ theme: { color } }) => color.gray[500]};
    @media (min-width: 48em) {
        display: none;
    } ;
`

export const MotionLink = styled(motion.a)`
    height: 1.875rem;
    padding: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${({ theme: { color } }) => color.gray[500]};
    text-decoration: none;
    text-align: center;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.xs};
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    z-index: 3;
    :hover {
        font-weight: 900;
        background-position: left;
        text-decoration: underline;
    }
`
