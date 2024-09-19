import './Features.scss';
import featureJson from '../../../data/features.json';

type feature = {
    header: string;
    body: string;
    icon: string;
}

const features: feature[] = featureJson;

export default function Feature() {
    return (
        <section className="features">
            <h2 className='sr-only'>With Maker, you can:</h2>

            <div className='features__grid'>
                {features.map((feature, index) => (
                    <article className='features__feature' key={index}>
                        <img className='features__icon' src={feature.icon} alt="" role="presentation"/>
                        <div className='features__feature-text'>
                            <h3>{feature.header}</h3>
                            <p>{feature.body}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}