import plansJson from '../../../data/plans.json';
import './Pricing.scss'
import CheckmarkIcon from "../../../components/Icons/CheckmarkIcon.tsx";

type plan = {
    header: string;
    body: string;
    icon: string;
    cost: number;
    features: string[];
}


export default function Pricing() {
    const plans: plan[] = plansJson;

    const containerStyles = {
        free: {
            "color": '#ffffff',
            "backgroundColor": '#093f68'
        },
        paid: {
            "color": '#080c20',
            "backgroundColor": '#3ee9e5'
        }
    }

    return (
        <section className="pricing">
            <div className="pricing__header-text">
                <h2 className="pricing__header">Our Pricing Plan</h2>
                <p className="pricing__body">We only make money when our creators make money. Our plans are always
                    affordable, and it’s completely free to get started.</p>
            </div>

            <div className="pricing__grid">
                {plans.map((plan, index) => (
                    <article className="pricing__card" key={index}
                             style={plan.cost === 0 ? containerStyles.free : containerStyles.paid}>

                        <img className="pricing__icon" src={plan.icon} alt="" role="presentation"/>

                        <div className="pricing__card-text">
                            <h3>{plan.header}</h3>
                            <p className='pricing__card-body'>{plan.body}</p>
                        </div>

                        <div className="pricing__features">
                            {plan.cost === 0 ?
                                <p className="pricing__cost">Free</p> :
                                <p className="pricing__cost-flex">
                                    <span className="pricing__cost">${plan.cost.toFixed(2)}</span> / month</p>}
                            <div>

                                <ul className="pricing__features-list">
                                    {plan.features.map((_feature, key) => (
                                        <li key={key} className="pricing__feature">
                                            <CheckmarkIcon color={plan.cost === 0 ? '#3ee9e5' : '#080c20'}/>
                                            <p>{plan.features[key]}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </section>
    )
}