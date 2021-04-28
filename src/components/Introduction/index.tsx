import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { Section, Explore, Background, Balcony } from './styles'

import LogoLarge from '../../images/logo-large.svg'
const Introduction: React.FC = () => {
    return (
        <Section>
            <p>
                Are you looking for <strong>woodden</strong>
                <br />
                <strong>furniture</strong> for your place?
            </p>
            <Balcony>
                <StaticImage
                    src="../../images/modern-balcony.png"
                    alt="Balcão moderno"
                    width={468}
                    height={477}
                />
                <LogoLarge />
            </Balcony>
            <Background />
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
