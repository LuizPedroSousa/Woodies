import React from 'react'
import Header from '../components/Header'
import { Container } from '../styles/pages/home'
import Seo from '../components/seo'
import Introduction from '../components/perPage/Introduction'
import AboutUs from '../components/perPage/AboutUs'
import HowItWorks from '../components/perPage/HowItWorks'
import Categories from '../components/perPage/Categories'
const Home: React.FC = () => {
    return (
        <Container>
            <Seo title="Home" />
            <Header />

            <main>
                <Introduction />
                <AboutUs />
                <HowItWorks />
                <Categories />
            </main>
        </Container>
    )
}

export default Home
