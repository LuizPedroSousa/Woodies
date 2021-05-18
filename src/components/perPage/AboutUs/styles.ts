import styled from '@emotion/styled'
import ItemField from '../../ItemField'
import { motion } from 'framer-motion'

export const Section = styled(motion.section)`
    width: 100%;
    @media (min-width: 62em) {
        height: 30%;
    }
`
export const Sticky = styled(motion.div)`
    width: 100%;
    position: relative;
    margin-top: 4rem;

    // 992px
    @media (min-width: 62em) {
        position: sticky;
        height: 80vh;
        top: 5rem;
        left: 0;
        margin-top: 0;
    }
`

export const Box = styled(motion.div)`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, max-content);
    justify-items: center;
    grid-template-areas: 'title' 'strong-description' 'item' 'description';
    p {
        color: ${({ theme: { color } }) => color.gray[500]};
        font-weight: 600;
        strong {
            font-weight: 800;
        }
    }
    p:nth-of-type(1) {
        margin-right: auto;
        grid-area: strong-description;
    }
    p:nth-of-type(2) {
        font-weight: 600;
        color: ${({ theme: { color } }) => color.gray[900]};
        margin-left: auto;
        grid-area: description;
    }

    // 530px
    @media (min-width: 33.125em) {
        margin-top: 2rem;
        justify-items: baseline;
        grid-template-areas:
            'item .'
            'item strong-description'
            'item description'
            'item .';
        grid-template-columns: 1fr max-content;
        grid-template-rows: 1fr max-content max-content 1fr;
        p:nth-of-type(1) {
            margin: 0;
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.2rem
            );
        }
        p:nth-of-type(2) {
            margin: 0;
            margin-top: 1rem;
            font-size: calc(${({ theme: { fontSize } }) => fontSize.md});
        }
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        p:nth-of-type(1) {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.2rem
            );
        }
        p:nth-of-type(2) {
            font-size: calc(${({ theme: { fontSize } }) => fontSize.md});
        }
    }

    // 768px
    @media (min-width: 48em) {
        p:nth-of-type(1) {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.6rem
            );
        }
        p:nth-of-type(2) {
            margin-top: 1rem;
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.3rem
            );
        }
    }

    // 992px
    @media (min-width: 62em) {
        p:nth-of-type(1) {
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
        p:nth-of-type(2) {
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        }
    }
`

export const Item = styled(ItemField)`
    margin: 1rem 0;
    grid-area: item;
    display: flex;
    justify-content: center;
    margin-right: 2rem;
    align-items: center;
    & > div {
        position: relative;
        left: 4rem;
        bottom: 0.5rem;
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        & > div {
            left: 1rem;
        }
    }

    // 992px
    @media (min-width: 62em) {
        & > div {
            left: 6rem;
        }
    }
`

export const Span = styled(motion.span)`
    position: absolute;
    z-index: 10;
    bottom: 0;
    width: max-content;
    left: 0;
    transform: translateY(6rem) translateX(-13rem);

    // 1280px
    @media (min-width: 80em) {
        width: 20rem;
    }
`

export const Tools = styled.span`
    position: absolute;
    right: 0;
    width: 8rem;
    height: 2rem;
    position: absolute;

    // 1030px and 1260px
    @media (min-width: 64.375em) and (max-width: 78.75em) {
        width: 14rem;
    }

    // 1280px
    @media (min-width: 80em) {
        width: 14rem;
    }
`

export const Footer = styled(motion.footer)`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: flex-start;
    p {
        color: ${({ theme: { color } }) => color.gray[900]};
        font-weight: 600;
        text-align: left;
        strong {
            font-weight: 900;
        }
        & + p {
            margin-top: 0.5rem;
        }
    }

    // 530px
    @media (min-width: 33.125em) {
        p:nth-of-type(1) {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.2rem
            );
        }
        p:nth-of-type(2) {
            margin: 0;
            margin-top: 1rem;
            font-size: calc(${({ theme: { fontSize } }) => fontSize.md});
        }
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        p:nth-of-type(1) {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.2rem
            );
        }
        p:nth-of-type(2) {
            font-size: calc(${({ theme: { fontSize } }) => fontSize.md});
        }
    }

    // 768px
    @media (min-width: 48em) {
        p:nth-of-type(1) {
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.6rem
            );
        }
        p:nth-of-type(2) {
            margin-top: 1rem;
            font-size: calc(
                ${({ theme: { fontSize } }) => fontSize.md} + 0.3rem
            );
        }
    }

    // 992px
    @media (min-width: 62em) {
        margin-top: 6rem;

        p:nth-of-type(1) {
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
        p:nth-of-type(2) {
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        }
    }
`
