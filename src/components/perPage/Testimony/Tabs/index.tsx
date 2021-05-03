import React, { useMemo, useState } from 'react'
import useTestimony from '../../../../hooks/useTestimony'

import { TabList, TabPanel, TabContent, Tab } from './styles'
import { AiFillStar } from 'react-icons/ai'
import ArrowRight from '../../../../images/arrow-right.svg'
import ArrowLeft from '../../../../images/arrow-left.svg'
import { useTheme } from '@emotion/react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import CustomItems from '../CustomItems'
const Tabs: React.FC = () => {
    const { testimony } = useTestimony()

    const { sm } = useBreakpoint()

    const {
        color: { yellow }
    } = useTheme()

    const [activeTestimonyIndex, setActiveTestimonyIndex] = useState(0)

    const handleActiveTestimonyIndex = (index: number) => {
        setActiveTestimonyIndex(index)
    }

    const handleNext = () => {
        if (!hasNext) {
            return
        }
        setActiveTestimonyIndex(activeTestimonyIndex + 1)
    }

    const handlePrevious = () => {
        if (!hasPrevious) {
            return
        }
        setActiveTestimonyIndex(activeTestimonyIndex - 1)
    }

    const { activeTestimony, hasPrevious, hasNext } = useMemo(() => {
        const activeTestimony = testimony[activeTestimonyIndex]

        const hasPrevious = !(activeTestimonyIndex < 1)
        const hasNext = !(activeTestimonyIndex === testimony.length - 1)

        return { activeTestimony, hasPrevious, hasNext }
    }, [activeTestimonyIndex])

    const { dots } = useMemo(() => {
        const dots = []
        for (const dot in testimony) {
            dots.push(dot)
        }
        return { dots }
    }, [testimony])

    return (
        <Tab>
            <TabContent>
                <header>
                    {activeTestimony.stars.map(star => (
                        <AiFillStar color={yellow[500]} key={star} />
                    ))}
                </header>
                <p>{activeTestimony.comment}</p>
                <footer>
                    <span>
                        <img
                            src={activeTestimony.user.photo.url}
                            alt={activeTestimony.user.name}
                        />
                    </span>
                    <p>
                        {activeTestimony.user.name}
                        <br />
                        {activeTestimony.user.surname}
                    </p>
                </footer>
            </TabContent>

            {!sm && <CustomItems />}

            <TabPanel hasNext={hasNext} hasPrevious={hasPrevious}>
                <div>
                    <button
                        disabled={!hasPrevious}
                        onClick={handlePrevious}
                        type="button"
                    >
                        <ArrowLeft />
                        Previous
                    </button>
                    <button
                        disabled={!hasNext}
                        onClick={handleNext}
                        type="button"
                    >
                        Next
                        <ArrowRight />
                    </button>
                </div>
                <ul>
                    {dots.map((dot, index) => (
                        <TabList
                            hasActive={activeTestimonyIndex === index}
                            key={dot}
                        >
                            <button
                                data-toggle="tab"
                                onClick={() =>
                                    handleActiveTestimonyIndex(index)
                                }
                            ></button>
                        </TabList>
                    ))}
                </ul>
            </TabPanel>
        </Tab>
    )
}

export default Tabs
