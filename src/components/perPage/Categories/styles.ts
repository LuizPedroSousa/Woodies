import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import ItemField from '../../ItemField'

interface ItemFieldProps {
    isActiveHover: boolean
}

export const Section = styled.section`
    margin-top: 2rem;
    width: 100%;

    // 608px
    @media (min-width: 38em) {
        margin-top: 5rem;
        grid-template-columns: repeat(2, 1fr);
    }

    // 768px
    @media (min-width: 48em) {
        margin-top: 6rem;
        grid-template-columns: repeat(3, 1fr);
    }

    // 992px
    @media (min-width: 62em) {
        margin-top: 0;
    }
`

export const ItemsContainer = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 2rem;
    grid-template-columns: 1fr;
    gap: 1.8rem;

    // 608px
    @media (min-width: 38em) {
        margin-top: 3rem;
        grid-template-columns: repeat(2, 1fr);
    }

    // 768px
    @media (min-width: 48em) {
        margin-top: 4rem;
        row-gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
    }
`

export const CustomItemField = styled(ItemField)<ItemFieldProps>`
    padding: 0.8rem;
    transition: 0.25s ease-out;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    figure {
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        figcaption {
            width: max-content;
            margin-right: auto;
            color: ${({ theme: { color } }) => color.gray[500]};
            font-weight: 900;
            font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        }
        img {
            margin: auto;
            display: block;
            width: auto;
            height: 50%;
            object-fit: cover;
        }
    }

    opacity: ${({ isActiveHover }) => (isActiveHover ? 0.6 : 1)};

    :hover {
        transform: scale(1.1);
        box-shadow: -7px 6px 36px rgba(62, 63, 67, 0.4);
    }
`
export const MotionButton = styled(motion.button)`
    display: block;
    background-color: inherit;
    border: 1px solid ${({ theme: { color } }) => color.gray[500]};
    text-align: center;
    margin-left: auto;
    width: 7.688rem;
    font: 400 ${({ theme: { fontSize } }) => fontSize.md} Nunito, sans-serif;
    height: 2.5rem;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.xs};
    transition: 0.25s;

    :hover {
        color: ${({ theme: { color } }) => color.yellow[700]};
    }
`
