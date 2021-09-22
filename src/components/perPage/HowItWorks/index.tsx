import React, { useEffect } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {
    motion,
    useAnimation,
    useTransform,
    useViewportScroll
} from 'framer-motion'
import ChooseDesign from '../../../images/choose-design.svg'
import AreaMeasuring from '../../../images/area-measuring.svg'
import Budgeting from '../../../images/budgeting.svg'
import Production from '../../../images/production.svg'
import { Section, Sticky, CustomTitle, Illustrations } from './styles'

const HowItWorks: React.FC = () => {
    const { scrollYProgress } = useViewportScroll()
    const { md } = useBreakpoint()
    const animationPoint = useTransform(
        scrollYProgress,
        [0.55, 0.56],
        [0.1, 0.2]
    )

    const animation = useAnimation()

    useEffect(() => {
        if (md)
            animationPoint.onChange(v => {
                if (v === 0.1) {
                    animation.start('hidden')
                } else if (v === 0.2) {
                    animation.start('show')
                }
            })
    }, [md])

    return (
        <Section id="how-it-works">
            {/* Pass any className to modify your styles  */}
            <Sticky>
                <CustomTitle
                    className=""
                    title="How to custom"
                    sectionName="how it works"
                />
                <Illustrations role="list">
                    <motion.li
                        variants={{
                            show: {
                                opacity: [0, 1],
                                scale: [0, 1.2, 1]
                            },
                            hidden: {
                                opacity: [1, 0],
                                scale: [1, 1.5, 1, 0],
                                transition: { duration: 0.5, delay: 0 }
                            }
                        }}
                        animate={animation}
                    >
                        <strong>Choose Design</strong>
                        <ChooseDesign />
                    </motion.li>
                    <motion.li
                        variants={{
                            show: {
                                opacity: [0, 1],
                                scale: [0, 1.2, 1],
                                transition: { delay: 0.5 }
                            },
                            hidden: {
                                opacity: [1, 0],
                                scale: [1, 1.5, 1, 0],
                                transition: { duration: 0.5, delay: 0 }
                            }
                        }}
                        animate={animation}
                    >
                        <strong>Area measuring</strong>
                        <AreaMeasuring />
                    </motion.li>
                    <motion.li
                        variants={{
                            show: {
                                opacity: [0, 1],
                                scale: [0, 1.2, 1],
                                transition: { delay: 1 }
                            },
                            hidden: {
                                opacity: [1, 0],
                                scale: [1, 1.5, 1, 0],

                                transition: { duration: 0.5, delay: 0 }
                            }
                        }}
                        animate={animation}
                    >
                        <strong>Budgeting</strong>
                        <Budgeting />
                    </motion.li>
                    <motion.li
                        variants={{
                            show: {
                                opacity: [0, 1],
                                scale: [0, 1.2, 1],
                                transition: { delay: 1.5 }
                            },
                            hidden: {
                                opacity: [1, 0],
                                scale: [1, 1.5, 1, 0],
                                transition: { duration: 0.5, delay: 0 }
                            }
                        }}
                        animate={animation}
                    >
                        <strong>Production</strong>
                        <Production />
                    </motion.li>
                </Illustrations>

                <motion.button
                    initial={md && { y: 50 }}
                    variants={{
                        show: {
                            opacity: [0, 1],
                            y: [null, -10, 0]
                        },
                        hidden: {
                            opacity: [1, 0],
                            y: [null, 50],
                            transition: { duration: 0.5, delay: 0 }
                        }
                    }}
                    animate={animation}
                    type="button"
                >
                    Get Personalized Now
                </motion.button>
            </Sticky>
        </Section>
    )
}

export default HowItWorks
