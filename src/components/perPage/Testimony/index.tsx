import React from 'react'
import Title from '../../Title'

import { Section, Content } from './styles'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Tabs from './Tabs'
import CustomItems from './CustomItems'
const Testimony: React.FC = () => {
    const { sm } = useBreakpoint()

    return (
        <Section id="testimony">
            <Title title="What they say" sectionName="testimony" />
            <Content>
                {sm && <CustomItems />}
                <Tabs />
            </Content>
        </Section>
    )
}
export default Testimony
