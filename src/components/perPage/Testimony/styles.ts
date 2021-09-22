import styled from '@emotion/styled'

export const Section = styled.section`
    margin-top: 4rem;
    width: 100%;

    // 768px
    @media (min-width: 48em) {
        margin-top: 4rem;
    }

    // 992px
    @media (min-width: 62em) {
        margin-top: 14rem;
    }
`

export const Content = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media (min-width: 37.5em) and (max-width: 47.5em) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: 31.25rem;
    }

    // 768px
    @media (min-width: 48em) {
        margin-top: 4rem;
        flex-direction: row;
    }
`
