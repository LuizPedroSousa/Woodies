import styled from '@emotion/styled'

import Background from '../../../images/background-footer.png'

interface ButtonProps {
    isValid: boolean
}

export const Wrapper = styled.footer`
    height: max-content;
    position: relative;
    margin-top: 2rem;
    background: url(${Background}) no-repeat bottom center;
    background-size: 100%;
    padding: 0 1.25rem;

    span:last-of-type:nth-of-type(1) {
        display: block;
        width: max-content;
        margin: 0 auto;
        position: relative;
        bottom: 1rem;
        margin-top: 3rem;
        font-weight: 600;
        font-size: ${({ theme: { fontSize } }) => fontSize.xs};
    }

    // 768px
    @media (min-width: 48em) {
        padding: 0 2rem;
    }

    // 992px
    @media (min-width: 62em) {
        padding: 0 5rem;
    }

    // 1280px
    @media (min-width: 80em) {
        padding: 0;
    }
`

export const Container = styled.div`
    // 1280px
    @media (min-width: 80em) {
        max-width: 1024px;
        margin: 0 auto;
        padding: 0;
    }
`

export const NewsLetter = styled.div`
    padding: 2rem 0;
    height: 10.875rem;

    p {
        color: ${({ theme: { color } }) => color.gray[900]};
    }
    form {
        position: relative;
        label {
            top: -1.1rem;
            color: ${({ theme: { color } }) => color.red[500]};
            font-weight: 800;
            position: absolute;
            font-size: ${({ theme: { fontSize } }) => fontSize.xs};
        }
        margin-top: 1rem;
        display: flex;

        input {
            height: 1.875rem;
            padding: 0.625rem 1rem;
            border-bottom-left-radius: ${({ theme: { borderRadius } }) =>
                borderRadius.xs};
            border-top-left-radius: ${({ theme: { borderRadius } }) =>
                borderRadius.xs};
            border: 1px solid ${({ theme: { color } }) => color.yellow[700]};
            width: 100%;
            z-index: 1;
            outline-color: ${({ theme: { color } }) => color.yellow[400]};
        }
    }

    @media (min-width: 31.25em) {
        p {
            max-width: 70%;
        }
    }

    // 768px
    @media (min-width: 48em) {
        form {
            input {
                height: auto;
            }
            margin: 0;
            width: 50%;
            label {
                top: -1.2rem;
                font-size: ${({ theme: { fontSize } }) => fontSize.sm};
            }
        }
        p {
            strong {
                font-size: calc(
                    ${({ theme: { fontSize } }) => fontSize.md} + 0.125rem
                );
            }
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // 992px
    @media (min-width: 62em) {
        form {
            input {
                height: 2.5rem;
                padding: 0 1rem;
            }
            margin-left: 2rem;
            width: 28rem;
        }
        p {
            max-width: 48%;
        }
    }
`

export const Button = styled.button<ButtonProps>`
    z-index: 2;
    background-color: ${({ theme: { color } }) => color.yellow[700]};
    border-bottom-right-radius: ${({ theme: { borderRadius } }) =>
        borderRadius.xs};
    border-top-right-radius: ${({ theme: { borderRadius } }) =>
        borderRadius.xs};
    width: 7.5rem;
    font: 600 ${({ theme: { fontSize } }) => fontSize.sm} Nunito, sans-serif;
    color: ${({ theme: { color } }) => color.white};
    opacity: ${({ isValid }) => (isValid ? 1 : 0.5)};
    :hover {
        background-color: ${({ theme: { color } }) => color.yellow[800]};
    }
`

export const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-template-rows: repeat(3, 1fr);
    position: relative;
    grid-template-areas:
        'contact contact'
        'product resources'
        'company follow';
    hr {
        width: 100%;
        height: 1px;
        margin-bottom: 1rem;
        background-color: ${({ theme: { color } }) => color.gray[100]};
        position: absolute;
        top: -1.5rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        width: max-content;
        strong {
            margin-bottom: 0.3rem;
        }
        & + div {
            margin-top: 1rem;
        }
    }

    a {
        & + a {
            margin-top: 0.2rem;
        }
        text-decoration: none;
        color: ${({ theme: { color } }) => color.gray[400]};
        :hover {
            color: ${({ theme: { color } }) => color.gray[500]};
            text-decoration: underline;
        }
    }

    & > div:nth-of-type(2) {
        grid-area: product;
    }
    & > div:nth-of-type(3) {
        grid-area: resources;
    }
    & > div:nth-of-type(4) {
        grid-area: company;
    }
    & > div:nth-of-type(5) {
        grid-area: follow;
    }

    // 600px
    @media (min-width: 37.5em) {
        width: max-content;
        height: 18.25rem;
        grid-template-rows: 1fr 1fr;
        grid-template-areas:
            'contact product resources '
            '. company follow';
        grid-template-columns: repeat(3, max-content);
        grid-row-gap: 1rem;
        grid-column-gap: 2rem;
        align-items: baseline;
        div:nth-of-type(2),
        div:nth-of-type(3) {
            strong {
                margin-bottom: 1rem !important;
            }
        }
        & > div {
            & + div {
                margin: 0;
            }
        }

        a {
            & + a {
                margin-top: 0.4rem;
            }
        }
    }

    // 768x
    @media (min-width: 48em) {
        display: flex;
        align-items: center;
        gap: 0;
        a {
            & + a {
                margin-top: 0.5rem;
            }
        }
        & > div {
            strong {
                margin-bottom: 1rem;
            }
            & + div {
                margin-left: 2rem;
            }
        }
    }
`

export const Contact = styled.div`
    grid-area: contact;
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 1rem;
        strong {
            margin-bottom: 0;
            color: ${({ theme: { color } }) => color.gray[500]};
            margin-left: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.25rem;
        }
    }
    span {
        color: ${({ theme: { color } }) => color.gray[400]};
        & + span {
            margin-top: 0.3rem;
        }
    }

    // 600px
    @media (min-width: 37.5em) {
        span {
            & + span {
                margin-top: 0.2rem;
            }
        }
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        }
    }

    // 768x
    @media (min-width: 48em) {
        div {
            margin-bottom: 1.2rem;
            strong {
                margin-bottom: 0;
            }
        }
        span {
            & + span {
                margin-top: 0.5rem;
            }
        }
    }
`
