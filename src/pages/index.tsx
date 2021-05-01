import React from 'react'
import Header from '../components/Header'
import { Container } from '../styles/pages/home'
import Seo from '../components/seo'
import Introduction from '../components/perPage/Introduction'
import AboutUs from '../components/perPage/AboutUs'
import HowItWorks from '../components/perPage/HowItWorks'

const Home: React.FC = () => {
    return (
        <Container>
            <Seo title="Home" />
            <Header />

            <main>
                <Introduction />
                <AboutUs />
                <HowItWorks />
            </main>
        </Container>
    )
}

export default Home
