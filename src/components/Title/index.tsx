import React from 'react'

import { Header } from './styles'
import Logo from '../../images/logo.svg'

interface TitleProps {
    title: string
    sectionName: string
    className?: string
}
const Title: React.FC<TitleProps> = ({ title, sectionName, className }) => {
    return (
        <Header className={className}>
            <div>
                <Logo />
                <strong>{title}</strong>
            </div>
            <hr />
            <h2>{sectionName}</h2>
        </Header>
    )
}

export default Title
