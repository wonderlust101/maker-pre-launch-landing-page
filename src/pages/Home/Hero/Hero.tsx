import HeroImageLeft from '/images/illustration-hero-left.svg'
import HeroImageRight from '/images/illustration-hero-right.svg'
import HeroDividerDecoration from '/images/icon-scroll.svg'
import './Hero.scss'

export default function Hero() {

    return (
        <section className="hero">
            <img className="hero__image--left" src={HeroImageLeft} alt="" role="presentation"/>
            <div className="hero__main-section">
                <div className="hero__text">
                    <h1>Get paid for the work you <span className="hero__text--highlight">love</span> to do.</h1>
                    <p>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re
                        looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
                </div>

                <img src={HeroDividerDecoration} alt=""/>
            </div>
            <img className="hero__image--right" src={HeroImageRight} alt="" role="presentation"/>
        </section>
    )
}