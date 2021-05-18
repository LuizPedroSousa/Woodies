import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FieldColor } from '.'

interface BoxProps {
    fieldColor?: FieldColor
    className: string
}
export const Box = styled(motion.div)<BoxProps>`
    position: relative;
    width: 12.375rem;
    height: 16.25rem;
    border-top-right-radius: 5rem;
    border-bottom-left-radius: 5rem;
    background-color: ${({ fieldColor, theme: { color } }) => {
        switch (fieldColor) {
            case 'cyan':
                return color.cyan[400]
            case 'pink':
                return color.pink[400]
            default:
                return color.yellow[400]
        }
    }};

    // 992px
    @media (min-width: 62em) {
        width: 17.375rem;
        border-top-right-radius: 8rem;
        border-bottom-left-radius: 8rem;
        height: 24.25rem;
    } ;
`
