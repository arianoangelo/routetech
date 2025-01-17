import React, { useRef } from 'react'
import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import FeaturesHome from '../partials/Features'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Contacts from '../partials/Contacts'
import Footer from '../partials/Footer'

function Home() {
    const contactRef = useRef(null)
    
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/*  Site header */}
            <Header contactRef={contactRef}/>
            {/*  Page content */}
            <main className="flex-grow">
                {/*  Page sections */}
                <HeroHome/>
                <FeaturesHome/>
                <FeaturesBlocks/>
                <Contacts contactRef={contactRef}/>
            </main>
            {/*  Site footer */}
            <Footer/>
        </div>
    )
}

export default Home
