import './Pricing.css'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

export default function Pricing() {
    return (
        <div className="pricing">
            <h1>Select the plan that's right for you</h1>
            <div className="pricing__container">
                <div className="pricing__title">
                    <span>Free</span>
                </div>
                <div className="pricing__cost">
                    <span className="amount">0</span>
                    <span className="monthly">/mo</span>
                </div>
                <div className="pricing__feature">
                    <ul>
                        <li>
                            
                            <DoneOutlineIcon className="pricing__icon"/>
                            <span>Three (3) live channels: Kapamily Channel, Knowledge Channel, Teleradyo
                            </span>
                        </li>
                        <li>
                            <DoneOutlineIcon className="pricing__icon"/>
                            <span>Twenty-six (26) drama series with different titles per month</span>
                        </li>
                        <li>
                            <DoneOutlineIcon className="pricing__icon"/>
                            <span>Selected episodes of drama anthologies, documentaries, news, variety shows and more</span>
                        </li>
                        <li>
                            <DoneOutlineIcon className="pricing__icon"/>
                            <span>Video quality in SD*</span>

                        </li>
                        <li>
                            <DoneOutlineIcon className="pricing__icon"/>
                            <span>Watch with ads on up to one (1) device at a time</span>

                        </li>
                    </ul>
                </div>
                <div className="pricing__button">
                    <button className="pricing__btn">SELECT</button>
                </div>
            </div>
        </div>
    )
}
