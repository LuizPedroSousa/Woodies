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

    @media (min-width: 768px) {
        main {
            padding: 0 2rem;
        }
    }

    @media (min-width: 992px) {
        main {
            height: 1050vh;
            padding: 0 5rem;
        }
    }

    @media (min-width: 1280px) {
        main {
            max-width: 1024px;
            margin: 0 auto;
            padding: 0;
        }
    }
`
