import React from 'react'
import Title from '../../Title'
import {
    Section,
    MotionButton,
    CustomItemField,
    ItemsContainer
} from './styles'
import useCategories from '../../../hooks/useCategories'
import { useTheme } from '@emotion/react'

const Categories: React.FC = () => {
    const { items } = useCategories()
    const { color } = useTheme()

    const buttonVariants = {
        hover: {
            color: [color.gray[700], color.white, color.yellow[700]],
            scale: [1, 0.9]
        }
    }

    return (
        <Section id="categories">
            <Title title="What we have" sectionName="categories" />
            <ItemsContainer>
                {items.map(
                    ({
                        id,
                        name,
                        image: { url, width, height },
                        fieldColor
                    }) => {
                        return (
                            <CustomItemField
                                key={String(id)}
                                fieldColor={fieldColor}
                                className=""
                            >
                                <figure>
                                    <figcaption>{name}</figcaption>
                                    <img
                                        src={url}
                                        width={width * 3}
                                        height={height * 3}
                                        alt={name}
                                    />
                                </figure>
                                <MotionButton
                                    whileHover="hover"
                                    transition={{ duration: 0.2 }}
                                    variants={buttonVariants}
                                    type="button"
                                >
                                    Shop Now
                                </MotionButton>
                            </CustomItemField>
                        )
                    }
                )}
            </ItemsContainer>
        </Section>
    )
}

export default Categories
