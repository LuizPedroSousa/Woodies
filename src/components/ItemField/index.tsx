import React from 'react'

import { Box } from './styles'

export type FieldColor = 'yellow' | 'pink' | 'cyan'
interface ItemProps {
    fieldColor?: FieldColor
    className: string
}
const ItemField: React.FC<ItemProps> = ({
    fieldColor,
    className,
    children
}) => {
    return (
        <Box className={className} fieldColor={fieldColor}>
            {children}
        </Box>
    )
}

export default ItemField
