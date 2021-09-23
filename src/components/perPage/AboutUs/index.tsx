import React, { useEffect, useState } from 'react'
import Title from '../../Title'

import { Section, Tools, Sticky, Item, Box, Span, Footer } from './styles'
import { StaticImage } from 'gatsby-plugin-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Logo from '../../../images/logo-large.svg'

import {
    motion,
    useAnimation,
    useTransform,
    useViewportScroll
} from 'framer-motion'
import { useSmoothScroll } from '../../../hooks/useSmoothScroll'

const AboutUs: React.FC = () => {
    const { md } = useBreakpoint()
    const { isScrollSmooth } = useSmoothScroll()
    const { scrollYProgress } = useViewportScroll()

    const firstAnimation = useAnimation()
    const secondAnimation = useAnimation()

    const itemScale = useTransform(scrollYProgress, [0.29, 0.38], [1, 0.5])
    const saladY = useTransform(scrollYProgress, [0.22, 0.32], [0, -20])
    const saladX = useTransform(scrollYProgress, [0.22, 0.32], [0, 20])
    const saladScale = useTransform(scrollYProgress, [0.22, 0.32], [1, 1.2])

    const firstAnimationPoint = useTransform(
        scrollYProgress,
        [0.38, 0.39],
        [0, 0.1]
    )

    const secondAnimationPoint = useTransform(
        scrollYProgress,
        [0.38, 0.4],
        [0, 0.1]
    )

    const scale = useTransform(scrollYProgress, [0.5, 0.53], [1, 0.8])
    const opacity = useTransform(
        scrollYProgress,
        [0.48, 0.5, 0.525, 0.53],
        [1, 0.5, 0.5, 0]
    )

    const [isFirstAnimationRunning, setIsFirstAnimationRunning] =
        useState(false)

    useEffect(() => {
        if (isScrollSmooth) {
            document.body.style.overflow = 'visible'
            return
        }
        if (isFirstAnimationRunning) {
            document.body.style.overflow = 'hidden'
            return
        }

        document.body.style.overflow = 'visible'
    }, [isFirstAnimationRunning, isScrollSmooth])

    useEffect(() => {
        if (md) {
            firstAnimationPoint.onChange(e => {
                if (e === 0.1) {
                    setIsFirstAnimationRunning(true)
                    firstAnimation.start('hidden').then(() => {
                        secondAnimation.start('show')
                        setIsFirstAnimationRunning(false)
                    })
                }
            })

            secondAnimationPoint.onChange(e => {
                if (!e) {
                    secondAnimation.start('hidden').then(() => {
                        firstAnimation.start('show')
                    })
                }
            })
        }
    }, [md])

    return (
        <Section id="about-us">
            {/* Pass any className to modify your styles  */}
            <Sticky style={md ? { opacity, scale } : {}}>
                <Title sectionName="about us" title="Who we are" />
                <Box>
                    <motion.p
                        variants={{
                            show: {
                                opacity: [null, 1],
                                x: [50, 0]
                            },
                            hidden: {
                                opacity: [1, 0],
                                transition: { duration: 0.7, delay: 0.5 },
                                x: [null, 50, -200]
                            }
                        }}
                        animate={firstAnimation}
                    >
                        <strong>WOODIES</strong> is the <strong>home of</strong>
                        <br /> <strong>modern wooden furniture</strong>
                    </motion.p>
                    <motion.p
                        animate={firstAnimation}
                        variants={{
                            show: {
                                opacity: [null, 1],
                                x: [50, 0]
                            },
                            hidden: {
                                opacity: [1, 0],
                                transition: { duration: 0.7, delay: 1 },
                                x: [null, 50, -500]
                            }
                        }}
                    >
                        the answer to your need for furniture
                        <br /> with shapes, sizes and colors.
                    </motion.p>

                    {/* Pass any className to modify your styles  */}
                    <Item
                        style={md ? { scale: itemScale } : {}}
                        fieldColor="yellow"
                        animate={firstAnimation}
                        variants={{
                            show: {
                                opacity: [null, 1],
                                y: [100, -50, 0]
                            },
                            hidden: {
                                transition: { duration: 0.7 },

                                opacity: [1, 0],
                                y: [null, -50, 100]
                            }
                        }}
                        className=""
                    >
                        <motion.div
                            style={
                                md
                                    ? {
                                          y: saladY,
                                          x: saladX,
                                          scale: saladScale
                                      }
                                    : {}
                            }
                        >
                            <StaticImage
                                objectFit="cover"
                                src="../../../images/salad.png"
                                width={1158}
                                height={918}
                                alt="Balde de salada"
                            />
                        </motion.div>
                    </Item>
                    {md && (
                        <Span animate={firstAnimation}>
                            <Logo />
                        </Span>
                    )}
                </Box>
                <Footer
                    initial={md && { opacity: 0 }}
                    animate={secondAnimation}
                    variants={{
                        show: {
                            opacity: [null, 1],
                            y: [null, -400],
                            transition: { duration: 0.7 }
                        },
                        hidden: {
                            opacity: [1, 0],
                            y: [null, -50, 100]
                        }
                    }}
                >
                    <motion.p
                        initial={md && { opacity: 0 }}
                        variants={{
                            show: {
                                opacity: [null, 1]
                            },
                            hidden: {
                                opacity: [1, 0],
                                y: [null, -50, 0]
                            }
                        }}
                        animate={secondAnimation}
                    >
                        Customized furniture <strong>made just for you</strong>
                    </motion.p>
                    <motion.p
                        initial={md && { opacity: 0 }}
                        variants={{
                            show: {
                                opacity: [null, 1],
                                x: [null, 0]
                            }
                        }}
                        animate={secondAnimation}
                    >
                        Get it easy to adjust furniture to the shape and size of
                        your{md && <br />} dwelling or business.
                    </motion.p>
                    {md && (
                        <Tools>
                            <StaticImage
                                objectFit="cover"
                                src="../../../images/tools.png"
                                width={861}
                                height={1152}
                                alt="Balde de salada"
                            />
                        </Tools>
                    )}
                </Footer>
            </Sticky>
        </Section>
    )
}

export default AboutUs
