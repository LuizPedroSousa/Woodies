import React, { useState } from 'react'

import { Container, Hamburger, MotionLink } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../images/logo.svg'
import { useTheme } from '@emotion/react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

const Header: React.FC = () => {
    const [hasViewMenu, setHasViewMenu] = useState(false)
    const { color } = useTheme()

    const { handleScrollToLink, headerY: y } = useSmoothScroll()

    const { sm, md } = useBreakpoint()

    const motionLinkVariants = {
        hover: {
            color: [color.gray[700], color.white, color.yellow[700]]
        }
    }

    const toggleViewMenu = () => setHasViewMenu(!hasViewMenu)

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
