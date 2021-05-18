import { MotionProps } from 'framer-motion'
import React from 'react'

import { Box } from './styles'

export type FieldColor = 'yellow' | 'pink' | 'cyan'
interface ItemProps extends MotionProps {
    fieldColor?: FieldColor
    className: string
}
const ItemField: React.FC<ItemProps> = ({
    fieldColor,
    className,
    children,
    ...props
}) => {
    return (
        <Box {...props} className={className} fieldColor={fieldColor}>
            {children}
        </Box>
    )
}

export default ItemField
