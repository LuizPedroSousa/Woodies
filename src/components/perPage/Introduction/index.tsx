import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Section, Explore, Background, Balcony } from './styles'

import LogoLarge from '../../../images/logo-large.svg'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
const Introduction: React.FC = () => {
    const { md } = useBreakpoint()
    return (
        <Section>
            <p>
                Are you looking for <strong>woodden</strong>
                <br />
                <strong>furniture</strong> for your place?
            </p>
            <Balcony>
                <StaticImage
                    src="../../../images/modern-balcony.png"
                    alt="Balcão moderno"
                    width={1704}
                    height={1731}
                />
                <LogoLarge />
            </Balcony>
            {md && <Background />}
            <Explore>
                <strong>
                    This is the
                    <br />
                    Right Place
                </strong>
                <button type="button" name="explore">
                    Explore Furniture
                </button>
            </Explore>
        </Section>
    )
}

export default Introduction
