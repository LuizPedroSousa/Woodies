import styled from '@emotion/styled'
import ItemField from '../../ItemField'
import { motion } from 'framer-motion'

export const Section = styled(motion.section)`
    width: 100%;
    @media (min-width: 992px) {
        height: 30%;
    }
`
export const Sticky = styled(motion.div)`
    width: 100%;
    position: relative;
    margin-top: 4rem;

    @media (min-width: 992px) {
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

    @media (min-width: 530px) {
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

    @media (min-width: 768px) {
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

    @media (min-width: 992px) {
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

    @media (min-width: 530px) and (max-width: 768px) {
        & > div {
            left: 1rem;
        }
    }

    @media (min-width: 992px) {
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

    @media (min-width: 1280px) {
        width: 20rem;
    }
`

export const Tools = styled.span`
    position: absolute;
    right: 0;
    width: 8rem;
    height: 2rem;
    position: absolute;

    @media (min-width: 1030px) and (max-width: 1260px) {
        width: 14rem;
    }

    @media (min-width: 1280px) {
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
    @media (min-width: 768px) {
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
