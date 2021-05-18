import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import {
    Section,
    Sticky,
    Explore,
    Background,
    Balcony,
    MotionSpan
} from './styles'
import LogoLarge from '../../../images/logo-large.svg'

import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
const Introduction: React.FC = () => {
    const { md, l } = useBreakpoint()
    const { scrollYProgress } = useViewportScroll()

    const balconyY = useTransform(
        scrollYProgress,
        [0.025, 0.12, 0.25],
        [0, -50, 0]
    )

    const balconyX = useTransform(
        scrollYProgress,
        [0.025, 0.12, 0.25],
        [0, 30, 0]
    )

    const logoY = useTransform(
        scrollYProgress,
        [0.025, 0.12, 0.25],
        [112, 180, 112]
    )

    const logoX = useTransform(
        scrollYProgress,
        [0.025, 0.12, 0.25],
        [-128, -200, -128]
    )

    const opacity = useTransform(
        scrollYProgress,
        [0.12, 0.19, 0.2, 0.22],
        [1, 0.5, 0.5, 0]
    )

    const scale = useTransform(
        scrollYProgress,
        [0.12, 0.19, 0.2, 0.22],
        [1, 0.5, 0.5, 0]
    )

    return (
        <Section id="home">
            {md && (
                <Background
                    style={md ? { opacity } : {}}
                    animate={{
                        width: ['0%', l ? '31%' : '36%']
                    }}
                ></Background>
            )}
            <Sticky style={{ opacity }}>
                <motion.p
                    style={md ? { scale } : {}}
                    animate={{
                        opacity: [0, 1],
                        x: [-50, 0],
                        transition: {
                            duration: 1,
                            delay: 0.5
                        }
                    }}
                >
                    Are you looking for <strong>woodden</strong>
                    <br />
                    <strong>furniture</strong> for your place?
                </motion.p>
                <Balcony
                    animate={{
                        opacity: [0, 1],
                        transition: {
                            delay: 0.5
                        },
                        x: [100, 0]
                    }}
                    style={md ? { y: balconyY, x: balconyX, scale } : {}}
                >
                    <StaticImage
                        src="../../../images/modern-balcony.png"
                        alt="Balcão moderno"
                        width={1704}
                        height={1731}
                    />
                    <MotionSpan style={md ? { y: logoY, x: logoX } : {}}>
                        <LogoLarge />
                    </MotionSpan>
                </Balcony>
                <Explore>
                    <motion.strong
                        style={md ? { scale } : {}}
                        animate={{
                            opacity: [0, 1],
                            x: [50, 0],
                            transition: {
                                delay: 0.5
                            }
                        }}
                    >
                        This is the
                        <br />
                        Right Place
                    </motion.strong>
                    <motion.button
                        style={md ? { scale } : {}}
                        animate={{
                            opacity: [0, 1],
                            transition: {
                                delay: 1
                            },
                            x: [-50, 0]
                        }}
                        type="button"
                        name="explore"
                    >
                        Explore Furniture
                    </motion.button>
                </Explore>
            </Sticky>
        </Section>
    )
}

export default Introduction
