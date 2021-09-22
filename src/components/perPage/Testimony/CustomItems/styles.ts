import styled from '@emotion/styled'
import ItemField from '../../../ItemField'

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const CustomItemField = styled(ItemField)`
    margin: 2rem 0;
    overflow: hidden;
    width: 8.5rem;
    height: 11.25rem;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 3rem;
    border-bottom-right-radius: 3rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    div {
        width: 100%;
        height: 100%;
    }

    // 768px
    @media (min-width: 48em) {
        margin: 0;
        & + & {
            margin-left: 1rem;
        }
    }

    @media (min-width: 53.125em) {
        width: 10rem;
        height: 14.25rem;
    }

    // 992px
    @media (min-width: 62em) {
        width: 12rem;
        border-top-left-radius: 4rem;
        border-bottom-right-radius: 4rem;
        height: 16rem;
    }

    // 1280px
    @media (min-width: 80em) {
        & + & {
            margin-left: 2.5rem;
        }
        width: 15rem;
        border-top-left-radius: 5rem;
        border-bottom-right-radius: 5rem;
        height: 20rem;
    } ;
`
