import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Title from '../../Title'

export const Section = styled(motion.section)`
    // 992px
    @media (min-width: 62em) {
        height: 20%;
    }
`

export const Sticky = styled(motion.div)`
    width: 100%;
    margin-top: 3rem;
    button {
        width: 100%;
        margin-top: 3rem;
        height: 3.125rem;
        background-color: ${({ theme: { color } }) => color.yellow[700]};
        border-radius: ${({ theme: { borderRadius } }) => borderRadius.xs};
        color: ${({ theme: { color } }) => color.white};
        font: 800 ${({ theme: { fontSize } }) => fontSize.md} Nunito;
        :hover {
            background-color: ${({ theme: { color } }) => color.yellow[800]};
        }
    }

    // 600px
    @media (min-width: 37.5em) {
        margin-top: 6rem;
        button {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 60%;
        }
    }

    // 768px
    @media (min-width: 48em) {
        button {
            width: 70%;
        }
    }

    // 992px
    @media (min-width: 62em) {
        button {
            width: 13.25rem;
        }
        margin: 0;
        position: sticky;
        height: 100vh;
        top: 5rem;
        left: 0;
    }
`
export const CustomTitle = styled(Title)`
    // 480px
    @media (max-width: 33.125em) {
        h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        }
    }

    // 480px
    @media (max-width: 30em) {
        h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize.sm};
        }
    }
`

export const Illustrations = styled.ul`
    display: flex;
    counter-reset: list;
    display: grid;
    margin-top: 3rem;
    gap: 3rem;
    grid-template-columns: 1fr;
    li {
        width: max-content;
        display: flex;
        align-items: flex-end;
        flex-direction: row-reverse;
        justify-content: flex-end;
        position: relative;
        height: 6rem;
        width: 15rem;
        svg {
            width: 6rem;
        }
        strong {
            color: ${({ theme: { color } }) => color.gray[900]};
            margin-bottom: 0.2rem;
            ::before {
                font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
                opacity: 25%;
                position: absolute;
                counter-increment: list;
                content: counter(list);
                bottom: 0.3rem;
                font-weight: 600;
                color: ${({ theme: { color } }) => color.pink[400]};
            }
        }
    }
    li:nth-of-type(1),
    li:nth-of-type(3) {
        strong {
            ::before {
                right: 3.5rem;
            }
        }
    }
    li:nth-of-type(2),
    li:nth-of-type(4) {
        flex-direction: row;
        margin-left: auto;
        strong {
            ::before {
                left: 3.8rem;
            }
        }
    }

    li:nth-of-type(1) {
        strong {
            margin-left: 1rem;
            ::before {
                right: 3.5rem;
            }
        }
    }

    li:nth-of-type(3) {
        strong {
            margin-left: 2rem;
        }
    }

    li:nth-of-type(4) {
        strong {
            margin-right: 1rem;
        }
    }

    // 600px
    @media (min-width: 37.5em) {
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 4rem;

        li {
            align-items: center;
            flex-direction: column-reverse !important;
            margin: 0;
            justify-content: center;
            strong {
                margin-left: 0 !important;
                margin-bottom: 0 !important;
                margin-top: 1rem;
                ::before {
                    font-size: ${({ theme: { fontSize } }) =>
                        fontSize['3xl']} !important;
                    margin: 0 !important;
                    left: 4rem !important;
                    bottom: 1rem;
                    right: auto !important;
                }
            }
        }
        li:nth-of-type(2) {
            strong {
                ::before {
                    left: 4.8rem !important;
                }
            }
        }
        li:nth-of-type(4) {
            strong {
                ::before {
                    left: 4.2rem !important;
                }
            }
        }
    }

    // 768px
    @media (min-width: 48em) {
        margin-top: 3rem;
        margin-bottom: 4rem;
        li {
            height: 11rem;
            width: 8rem;
            margin: 0 !important;
            svg {
                height: 6rem;
            }
            strong {
                ::before {
                    font-size: ${({ theme: { fontSize } }) =>
                        fontSize['5xl']} !important;
                    right: auto !important;
                    bottom: 1.5rem;
                }
            }
        }
        li:nth-of-type(1),
        li:nth-of-type(3) {
            strong {
                ::before {
                    left: 0 !important;
                }
            }
        }
        li:nth-of-type(2) {
            strong {
                ::before {
                    left: 0 !important;
                }
            }
        }
        li:nth-of-type(4) {
            strong {
                ::before {
                    left: -0.8rem !important;
                }
            }
        }
        grid-template-columns: repeat(4, 1fr);
    }

    // 992px
    @media (min-width: 62em) {
        margin-top: 4rem;
        li {
            opacity: 0;
            svg {
                height: 7.5rem;
            }
            strong {
                ::before {
                    bottom: 1rem !important;
                    left: 0 !important;
                    font-size: ${({ theme: { fontSize } }) =>
                        fontSize['5xl']} !important;
                }
            }
        }
        li:nth-of-type(2) {
            strong {
                ::before {
                    left: -0.8rem !important;
                }
            }
        }
    }

    // 1280px
    @media (min-width: 80em) {
        margin-bottom: 6rem;
        max-width: 952px;
        margin-left: auto;
        margin-right: auto;
        gap: 0;
        li {
            width: auto;
            strong {
                margin-top: 1.875rem;
                ::before {
                    font-size: ${({ theme: { fontSize } }) =>
                        fontSize['7xl']} !important;
                }
            }
        }
        li:nth-of-type(1),
        li:nth-of-type(2),
        li:nth-of-type(3) {
            strong {
                ::before {
                    left: -1.8rem !important;
                }
            }
        }
        li:nth-of-type(4) {
            strong {
                ::before {
                    left: -3rem !important;
                }
            }
        }
    }
`
