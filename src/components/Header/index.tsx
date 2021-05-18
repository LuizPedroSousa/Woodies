import React, { MouseEvent, useState } from 'react'

import { Container, Hamburger, MotionLink } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../images/logo.svg'
import { useTheme } from '@emotion/react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useMotionValue, useTransform, useViewportScroll } from 'framer-motion'

type Href =
    | '#home'
    | '#about-us'
    | '#how-it-works'
    | '#categories'
    | '#testimony'
    | '#sign-up'

const Header: React.FC = () => {
    const [hasViewMenu, setHasViewMenu] = useState(false)
    const { color } = useTheme()
    const { scrollY } = useViewportScroll()

    const { sm, md } = useBreakpoint()

    const y = useMotionValue(0)

    const motionLinkVariants = {
        hover: {
            color: [color.gray[700], color.white, color.yellow[700]]
        }
    }

    let prevScrollPos = scrollY.get()

    useTransform(scrollY, value => {
        const currentScrollPos = value
        if (prevScrollPos > currentScrollPos) {
            prevScrollPos = currentScrollPos
            return y.set(0)
        } else if (currentScrollPos > 1378) {
            prevScrollPos = currentScrollPos
            return y.set(-60)
        }
    })

    const toggleViewMenu = () => setHasViewMenu(!hasViewMenu)

    const handleScrollToLink = (
        event: MouseEvent<HTMLAnchorElement>,
        href: Href
    ) => {
        event.preventDefault()
        const link = document.querySelector<any>(href).offsetTop
        window.scrollTo({ top: link - 80, behavior: 'smooth' })
        return y.set(0)
    }

    return (
        <Container
            style={{ y, x: md ? '-50%' : '0' }}
            hasViewMenu={hasViewMenu}
        >
            <div>
                <Logo />
                <h2>WOODIES</h2>
            </div>
            <nav>
                {!sm && (
                    <Hamburger
                        onClick={toggleViewMenu}
                        whileHover={{ scale: [1, 0.9] }}
                        whileTap={{ scale: [1, 0.5, 1] }}
                        type="button"
                    >
                        <GiHamburgerMenu size={16} />
                    </Hamburger>
                )}
                <ul role="list">
                    <li>
                        <MotionLink
                            variants={motionLinkVariants}
                            transition={{ duration: 0.25 }}
                            whileHover="hover"
                            href="#home"
                            onClick={event =>
                                handleScrollToLink(event, '#home')
                            }
                        >
                            Home
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink
                            variants={motionLinkVariants}
                            transition={{ duration: 0.25 }}
                            whileHover="hover"
                            href="#about-us"
                            onClick={event =>
                                handleScrollToLink(event, '#about-us')
                            }
                        >
                            About Us
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink
                            variants={motionLinkVariants}
                            transition={{ duration: 0.25 }}
                            whileHover="hover"
                            onClick={event =>
                                handleScrollToLink(event, '#how-it-works')
                            }
                            href="#how-it-works"
                        >
                            How it works
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink
                            variants={motionLinkVariants}
                            transition={{ duration: 0.25 }}
                            whileHover="hover"
                            href="#categories"
                            onClick={event =>
                                handleScrollToLink(event, '#categories')
                            }
                        >
                            Categories
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink
                            variants={motionLinkVariants}
                            transition={{ duration: 0.25 }}
                            whileHover="hover"
                            href="#testimony"
                            onClick={event =>
                                handleScrollToLink(event, '#testimony')
                            }
                        >
                            Testimony
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink
                            transition={{ duration: 0.25 }}
                            whileHover={{
                                color: md
                                    ? [
                                          color.gray[700],
                                          color.yellow[700],
                                          color.white
                                      ]
                                    : [
                                          color.gray[700],
                                          color.white,
                                          color.yellow[700]
                                      ]
                            }}
                            href="#sign-up"
                            onClick={event =>
                                handleScrollToLink(event, '#sign-up')
                            }
                        >
                            Sign up
                        </MotionLink>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default Header
