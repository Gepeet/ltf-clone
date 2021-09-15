import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__top"></div>
            <div className="footer__container">
                <div className="footer__left">
                    <div className="footer__links">
                        <p>Help</p>
                        <p>Find a Dealer</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Terms</p>
                        <p>Advertise with Us</p>
                    </div>
                    <div className="footer__apps">
                        <img src="https://img.tfc.tv/assets/svg/button_ios.svg" alt="" />
                        <img src="https://img.tfc.tv/assets/svg/button_android.svg" alt="" />
                    </div>
                </div>
                <div className="footer__right">
                    <p>2021 All rights reserved by iWantTFC</p>
                    <div className="footer__social">
                        <div className="social">
                            <FacebookIcon className="social__link"/>
                        </div>
                        <div className="social">
                            <InstagramIcon className="social__link"/>
                        </div>
                        <div className="social">
                            <TwitterIcon className="social__link"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
