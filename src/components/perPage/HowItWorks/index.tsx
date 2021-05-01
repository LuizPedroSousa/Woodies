import React from 'react'

import { Section, CustomTitle, Illustrations } from './styles'
import ChooseDesign from '../../../images/choose-design.svg'
import AreaMeasuring from '../../../images/area-measuring.svg'
import Budgeting from '../../../images/budgeting.svg'
import Production from '../../../images/production.svg'
const HowItWorks: React.FC = () => {
    return (
        <Section id="how-it-works">
            {/* Pass any className to modify your styles  */}
            <CustomTitle
                className=""
                title="How to custom"
                sectionName="how it works"
            />
            <Illustrations role="list">
                <li>
                    <strong>Choose Design</strong>
                    <ChooseDesign />
                </li>
                <li>
                    <strong>Area measuring</strong>
                    <AreaMeasuring />
                </li>
                <li>
                    <strong>Budgeting</strong>
                    <Budgeting />
                </li>
                <li>
                    <strong>Production</strong>
                    <Production />
                </li>
            </Illustrations>

            <button type="button">Get Personalized Now</button>
        </Section>
    )
}

export default HowItWorks
