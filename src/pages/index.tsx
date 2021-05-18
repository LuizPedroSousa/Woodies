import React from 'react'
import Header from '../components/Header'
import { Container } from '../styles/pages/home'
import Seo from '../components/seo'
import Introduction from '../components/perPage/Introduction'
import AboutUs from '../components/perPage/AboutUs'
import HowItWorks from '../components/perPage/HowItWorks'
import Categories from '../components/perPage/Categories'
import Testimony from '../components/perPage/Testimony'
import Footer from '../components/perPage/Footer'
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
                <Testimony />
            </main>
            <Footer />
        </Container>
    )
}

export default Home
