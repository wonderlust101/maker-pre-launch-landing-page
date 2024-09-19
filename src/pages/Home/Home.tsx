import './Home.scss'

import Header from "./Header/Header.tsx";
import Hero from "./Hero/Hero.tsx";
import Feature from "./Features/Features.tsx";
import Pricing from "./Pricing/Pricing.tsx";
import Footer from "./Footer/Footer.tsx";

export default function Home() {

    return (
        <>
            <Header/>
            
            <main className='home__content grid-bleed'>
                <Hero/>
                <Feature/>
                <Pricing/>
            </main>
            
            <Footer/>
        </>
    )
}