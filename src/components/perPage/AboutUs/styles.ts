import styled from '@emotion/styled'
import ItemField from '../../ItemField'
import LogoImg from '../../../images/logo-large.svg'

export const Section = styled.section`
    width: 100%;
    position: relative;
    margin-top: 4rem;
    span {
        position: absolute;
        right: -5rem;
        bottom: -8rem;
        width: 10rem;
    }

    // 1030px and 1260px
    @media (min-width: 64.375em) and (max-width: 78.75em) {
        span {
            right: -10rem;
            width: 14rem;
        }
    }

    // 992px
    @media (min-width: 62em) {
        margin-top: 8.875rem;
    }

    // 1280px
    @media (min-width: 80em) {
        span {
            right: -11rem;
            width: 16rem;
        }
    }
`

export const Box = styled.div`
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
    div {
        position: relative;
        left: 4rem;
        bottom: 0.5rem;
    }

    // 530px and 760px
    @media (min-width: 33.125em) and (max-width: 47.5em) {
        div {
            left: 1rem;
        }
    }

    // 992px
    @media (min-width: 62em) {
        div {
            left: 6rem;
        }
    }
`
export const Logo = styled(LogoImg)`
    position: absolute;
    z-index: 10;
    bottom: -10rem;
    width: max-content;
    left: -6rem;

    // 1280px
    @media (min-width: 80em) {
        width: 20rem;
        left: -16rem;
    }
`
export const Footer = styled.footer`
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
