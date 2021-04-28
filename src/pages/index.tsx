import React from 'react'
import Header from '../components/Header'
import { Container } from '../styles/pages/home'
import Seo from '../components/seo'
import Introduction from '../components/Introduction'
const Home: React.FC = () => {
    return (
        <Container>
            <Seo title="Home" />
            <Header />
            <main>
                <Introduction />
            </main>
        </Container>
    )
}

export default Home
