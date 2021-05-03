import styled from '@emotion/styled'

interface TabPanelProps {
    hasNext: boolean
    hasPrevious: boolean
}

interface TabListProps {
    hasActive: boolean
}

export const Tab = styled.div`
    height: 100%;
    width: 100%;

    // 992px
    @media (min-width: 48em) {
        width: max-content;
    }
`

export const TabContent = styled.div`
    height: 11rem;
    border: 1px solid ${({ theme: { color } }) => color.cyan[400]};
    border-top-right-radius: 4rem;
    border-bottom-left-radius: 4rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    header {
        font-size: 1rem;
    }
    p {
        display: block;
        color: ${({ theme: { color } }) => color.gray[500]};
        height: max-content;
        font-weight: 600;
        font-size: ${({ theme: { fontSize } }) => fontSize.xs};
        overflow-y: scroll;
        text-overflow: ellipsis;
    }
    footer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
            border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
            width: 2.5rem;
            height: 2.5rem;
            overflow: hidden;
            img {
                object-fit: cover;
                width: 3.749rem;
                height: 2.5rem;
            }
        }
        p {
            color: ${({ theme: { color } }) => color.gray[50]};
            overflow: auto;
            margin-left: 0.5rem;
        }
    }

    // 768px
    @media (min-width: 48em) {
        width: 20rem;
        & > p {
            font-size: ${({ theme: { fontSize } }) => fontSize.sm};
        }
        padding: 2rem 1.5rem;
    }

    // 992px
    @media (min-width: 62em) {
        width: 22rem;
        header {
            font-size: 1.5rem;
        }
        height: 17.5rem;
    }

    // 1280px
    @media (min-width: 80em) {
        width: 24rem;
    }
`

export const TabPanel = styled.div<TabPanelProps>`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 1.5rem;
    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            font: 800 ${({ theme: { fontSize } }) => fontSize.sm} Nunito;
            background-color: inherit;
            height: 2rem;
        }
        button:first-of-type {
            svg {
                margin-right: 0.5rem;
            }
            cursor: ${({ hasPrevious }) =>
                !hasPrevious ? 'no-drop' : 'cursor'};
            opacity: ${({ hasPrevious }) => (hasPrevious ? 1 : 0.5)};
        }
        button:last-of-type {
            svg {
                margin-left: 0.5rem;
            }
            cursor: ${({ hasNext }) => (!hasNext ? 'no-drop' : 'cursor')};
            opacity: ${({ hasNext }) => (hasNext ? 1 : 0.5)};
        }
    }
    ul {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const TabList = styled.li<TabListProps>`
    button {
        position: relative;
        width: 2.5rem;
        height: 8px;
        background-color: ${({ theme: { color }, hasActive }) =>
            hasActive ? color.yellow[700] : color.gray[100]};
        border-radius: ${({ theme: { borderRadius } }) => borderRadius['2xs']};
    }
    & + li {
        margin-left: 1rem;
    }
`
