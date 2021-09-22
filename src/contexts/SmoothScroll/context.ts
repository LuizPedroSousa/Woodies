import { MotionValue } from 'framer-motion'
import { createContext, MouseEvent } from 'react'

type Href =
    | '#home'
    | '#about-us'
    | '#how-it-works'
    | '#categories'
    | '#testimony'
    | '#sign-up'

interface SmoothScrollContextProps {
    handleScrollToLink: (
        event: MouseEvent<HTMLAnchorElement>,
        href: Href
    ) => void
    headerY: MotionValue<number>
    isScrollSmooth: boolean
}

const SmoothScrollContext = createContext({} as SmoothScrollContextProps)

export { SmoothScrollContext }
