import styled from '@emotion/styled'

export const Section = styled.section`
    p {
        grid-area: title;
        font-size: ${({ theme: { fontSize } }) => fontSize.lg};
    }

    // 768px
    @media (min-width: 48em) {
        display: grid;
        margin-top: 6rem;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: max-content 1fr;
        grid-template-areas: 'title images' 'explore images';
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        p {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.lg} + 0.5rem
            );
        }
    }

    // 992px
    @media (min-width: 62em) {
        margin-top: 6rem;
    }

    // 1280px
    @media (min-width: 80em) {
        p {
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
    }
`

export const Explore = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    bottom: 1rem;
    grid-area: explore;
    strong {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        color: ${({ theme: { color } }) => color.gray[600]};
    }

    button {
        border-radius: ${({ theme: { borderRadius } }) => borderRadius.xs};
        background-color: ${({ theme: { color } }) => color.yellow[700]};
        color: ${({ theme: { color } }) => color.white};
        font: 800 ${({ theme: { fontSize } }) => fontSize.md} Nunito, sans-serif;
        width: 10.938rem;
        margin-top: 1rem;
        height: 3.125rem;
        :hover {
            background-color: ${({ theme: { color } }) => color.yellow[800]};
        }
    }
    // 480px
    @media (min-width: 30em) {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['3xl']};
        }
        button {
            font-size: ${({ theme: { fontSize } }) => fontSize.md};
        }
    }

    // 768px
    @media (min-width: 48em) {
        margin-top: 1rem;
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        justify-content: space-evenly;
        align-items: flex-end;
        flex-direction: row;
    }

    // 992px
    @media (min-width: 62em) {
        strong {
            font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
            margin-top: 2rem;
        }
    }
`

export const Background = styled.svg`
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    width: 22.8rem;
    height: 100%;
    border-bottom-left-radius: 10rem;
    background-color: ${({ theme: { color } }) => color.pink[400]};
`

export const Balcony = styled.div`
    grid-area: images;
    position: relative;
    margin-top: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-left: 1.5rem;
        z-index: 2;
    }
    svg {
        position: absolute;
        z-index: 1;
        transform: translateX(-2rem) translateY(5rem);
        width: 16rem;
    }

    // 480px
    @media (min-width: 30em) {
        img {
            width: 20rem;
        }
        svg {
            width: 18rem;
        }
    }

    // 768px
    @media (min-width: 48em) {
        margin-top: 0;
        bottom: 2rem;
    }

    // 992px
    @media (min-width: 62em) {
        img {
            width: 100%;
        }
        svg {
            transform: translateX(-8rem) translateY(7rem);
            width: 23.875rem;
        }
    }
`
