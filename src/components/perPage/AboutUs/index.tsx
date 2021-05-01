import React from 'react'
import Title from '../../Title'

import { Section, Item, Box, Logo, Footer } from './styles'
import { StaticImage } from 'gatsby-plugin-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const AboutUs: React.FC = () => {
    const { md } = useBreakpoint()
    return (
        <Section id="about-us">
            {/* Pass any className to modify your styles  */}
            <Title className="" sectionName="about us" title="Who we are" />
            <Box>
                <p>
                    <strong>WOODIES</strong> is the <strong>home of</strong>
                    <br /> <strong>modern wooden furniture</strong>
                </p>
                <p>
                    the answer to your need for furniture
                    <br /> with shapes, sizes and colors.
                </p>
                {/* Pass any className to modify your styles  */}
                <Item fieldColor="yellow" className="">
                    <StaticImage
                        objectFit="cover"
                        src="../../../images/salad.png"
                        width={1158}
                        height={918}
                        alt="Balde de salada"
                    />
                </Item>
            </Box>
            {md && (
                <>
                    <Logo />
                    <span>
                        <StaticImage
                            objectFit="cover"
                            src="../../../images/tools.png"
                            width={861}
                            height={1152}
                            alt="Balde de salada"
                        />
                    </span>
                </>
            )}
            <Footer>
                <p>
                    Customized furniture <strong>made just for you</strong>
                </p>
                <p>
                    Get it easy to adjust furniture to the shape and size of
                    your{md && <br />} dwelling or business.
                </p>
            </Footer>
        </Section>
    )
}

export default AboutUs
