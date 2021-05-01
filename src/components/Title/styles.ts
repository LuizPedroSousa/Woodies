import styled from '@emotion/styled'

interface HeaderProps {
    className?: string
}
export const Header = styled.header<HeaderProps>`
    width: 100%;
    align-items: center;
    position: relative;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-gap: 0.5rem;
    grid-area: title;
    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        strong {
            margin-left: 0.5rem;
            color: ${({ theme: { color } }) => color.gray[500]};
        }
        width: 100%;
    }

    hr {
        height: 1px;
        bottom: 0;
        background-color: ${({ theme: { color } }) => color.gray[700]};
        width: 100%;
    }

    h2 {
        width: 100%;
        text-transform: uppercase;
        text-align: right;
        font-weight: 900;
        margin-left: auto;
        color: ${({ theme: { color } }) => color.gray[100]};
        position: relative;
    }

    // 480px
    @media (min-width: 30em) {
        strong {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.3rem
            );
        }
        h2 {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.lg} + 0.3rem
            );
        }
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        }
        h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
    }

    // 768px
    @media (min-width: 48em) {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
        h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize['3xl']};
        }
    }

    // 992px
    @media (min-width: 62em) {
        grid-gap: 1rem;

        h2 {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize['5xl']} - 1rem
            );
        }
    }

    // 1280px
    @media (min-width: 80em) {
        h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
        }
    }
`
