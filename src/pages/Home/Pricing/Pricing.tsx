import plansJson from '../../../data/plans.json';
import './Pricing.scss'
import CheckmarkIcon from "../../../components/Icons/CheckmarkIcon.tsx";

type plan = {
    header: string;
    body: string;
    icon: string;
    cost: number;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
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
                    <article className="pricing__grid-container" key={index}
                             style={plan.cost === 0 ? containerStyles.free : containerStyles.paid}>

                        <img className="pricing__icon" src={plan.icon} alt="" role="presentation"/>

                        <div className="pricing__price-text">
                            <h3>{plan.header}</h3>
                            <p>{plan.body}</p>
                        </div>

                        <div className="pricing__features">
                            {plan.cost === 0 ?
                                <p className="pricing__cost">Free</p> :
                                <p className="pricing__cost-flex">
                                    <span className="pricing__cost">${plan.cost.toFixed(2)}</span> / month</p>}
                            <div>

                                <ul className="pricing__features-list">
                                    <li className="pricing__feature">
                                        <CheckmarkIcon color={plan.cost === 0 ? '#3EE9E5': '#080C20'}/>
                                        <p>{plan.feature1}</p>
                                    </li>
                                    <li className="pricing__feature">
                                        <CheckmarkIcon color={plan.cost === 0 ? '#3EE9E5': '#080C20'}/>
                                        <p>{plan.feature2}</p>
                                    </li>
                                    <li className="pricing__feature">
                                        <CheckmarkIcon color={plan.cost === 0 ? '#3EE9E5': '#080C20'}/>
                                        <p>{plan.feature3}</p>
                                    </li>
                                    <li className="pricing__feature">
                                        <CheckmarkIcon color={plan.cost === 0 ? '#3EE9E5': '#080C20'}/>
                                        <p>{plan.feature4}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

        </section>
    )
}