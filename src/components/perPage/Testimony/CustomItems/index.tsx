import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import { ItemsContainer, CustomItemField } from './styles'

const CustomItems: React.FC = () => {
    return (
        <ItemsContainer>
            <CustomItemField className="">
                <StaticImage
                    src="../../../../images/bed-room.png"
                    width={1745}
                    height={1670}
                    objectFit="cover"
                    alt="bed room"
                />
            </CustomItemField>
            <CustomItemField className="">
                <StaticImage
                    width={1920}
                    height={2880}
                    src="../../../../images/breakfast.png"
                    objectFit="cover"
                    alt="break fast"
                />
            </CustomItemField>
        </ItemsContainer>
    )
}

export default CustomItems
