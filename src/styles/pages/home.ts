import styled from '@emotion/styled'
export const Container = styled.div`
    width: 100%;
    align-items: center;
    flex-direction: column;
    position: relative;
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
            height: 1200vh;
            padding: 0 5rem;
        }
    }

    // 1280px
    @media (min-width: 80em) {
        main {
            max-width: 1024px;
            margin: 0 auto;
            padding: 0;
        }
    }
`
