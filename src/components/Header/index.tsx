import React, { useState } from 'react'

import { HeaderContainer, Hamburger, MotionLink } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../images/logo.svg'
import { useTheme } from '@emotion/react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
const Header: React.FC = () => {
    const [hasViewMenu, setHasViewMenu] = useState(false)
    const { color } = useTheme()

    const { sm, md } = useBreakpoint()

    const toggleViewMenu = () => setHasViewMenu(!hasViewMenu)

    const motionLinkVariants = {
        hover: {
            color: [color.gray[700], color.white, color.yellow[700]]
        }
    }
    return (
        <HeaderContainer hasViewMenu={hasViewMenu}>
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
                        >
                            About Us
                        </MotionLink>
                    </li>
                    <li>
                        <MotionLink
                            variants={motionLinkVariants}
                            transition={{ duration: 0.25 }}
                            whileHover="hover"
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
                        >
                            Sign up
                        </MotionLink>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header
