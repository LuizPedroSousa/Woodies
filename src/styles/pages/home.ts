import styled from '@emotion/styled'
export const Container = styled.div`
    height: 100vh;
    width: 100%;
    align-items: center;
    flex-direction: column;
    main {
        padding: 0 1.25rem;
        padding-bottom: 4rem;
    }

    // 768px
    @media (min-width: 48em) {
        main {
            padding: 0 2rem;
        }
    }

    // 992px
    @media (min-width: 62em) {
        main {
            padding: 0 5rem;
        }
    }

    // 1280px
    @media (min-width: 80em) {
        main {
            padding: 0 6.25rem;
        }
    }
`
