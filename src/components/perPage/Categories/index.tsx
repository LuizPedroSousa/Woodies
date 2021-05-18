import React, { useState } from 'react'
import Title from '../../Title'
import {
    Section,
    MotionButton,
    CustomItemField,
    ItemsContainer
} from './styles'
import useCategories from '../../../hooks/useCategories'

const Categories: React.FC = () => {
    const { items } = useCategories()
    const [currentCategoryHover, setCurrentCategoryHover] = useState<number>()
    const [isActiveCategory, setIsActiveCategory] = useState(false)

    const handleSetActiveHover = (index: number) => {
        setCurrentCategoryHover(index)
        setIsActiveCategory(true)
    }
    const handleRemoveActiveHover = () => {
        setIsActiveCategory(false)
    }

    return (
        <Section id="categories">
            <Title title="What we have" sectionName="categories" />
            <ItemsContainer>
                {items.map(
                    (
                        { id, name, image: { url, width, height }, fieldColor },
                        index
                    ) => {
                        return (
                            <CustomItemField
                                isActiveHover={
                                    currentCategoryHover !== index &&
                                    isActiveCategory
                                }
                                key={String(id)}
                                fieldColor={fieldColor}
                                className=""
                                onHoverStart={() => handleSetActiveHover(index)}
                                onHoverEnd={handleRemoveActiveHover}
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
                                    whileHover={{ scale: [1, 1.2, 0.9] }}
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
