import React from 'react'
import Title from '../../Title'

import * as S from './styles'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Tabs from './Tabs'
import CustomItems from './CustomItems'
const Testimony: React.FC = () => {
    const { sm } = useBreakpoint()

    return (
        <S.Section id="testimony">
            <Title title="What they say" sectionName="testimony" />
            <S.Content>
                {sm && <CustomItems />}
                <Tabs />
            </S.Content>
        </S.Section>
    )
}
export default Testimony
