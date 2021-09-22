import { useMotionValue, useTransform, useViewportScroll } from 'framer-motion'
import React, { useState, MouseEvent } from 'react'

import { SmoothScrollContext } from './context'

type Href =
    | '#home'
    | '#about-us'
    | '#how-it-works'
    | '#categories'
    | '#testimony'
    | '#sign-up'

const { Provider } = SmoothScrollContext

const SmoothScrollProvider: React.FC = ({ children }) => {
    const [isScrollSmooth, setIsScrollSmooth] = useState(false)

    const headerY = useMotionValue(0)

    const { scrollY } = useViewportScroll()

    let prevScrollPos = scrollY.get()

    useTransform(scrollY, value => {
        const currentScrollPos = value
        if (prevScrollPos > currentScrollPos) {
            prevScrollPos = currentScrollPos
            return headerY.set(0)
        } else if (currentScrollPos > 1378) {
            prevScrollPos = currentScrollPos
            return headerY.set(-60)
        }
    })

    const handleScrollToLink = (
        event: MouseEvent<HTMLAnchorElement>,
        href: Href
    ) => {
        event.preventDefault()
        const link = document.querySelector<any>(href).offsetTop
        setIsScrollSmooth(true)
        window.scrollTo({ top: link - 80, behavior: 'smooth' })
        return headerY.set(0)
    }

    return (
        <Provider value={{ handleScrollToLink, isScrollSmooth, headerY }}>
            {children}
        </Provider>
    )
}

export { SmoothScrollProvider }
