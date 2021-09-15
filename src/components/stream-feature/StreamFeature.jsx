import './StreamFeature.css'

export default function StreamFeature() {
    return (
        <div className="stream">
            <h1>Stream and Watch Everywhere</h1>
            <div className="stream__icon__det">
                <div className="stream__item">
                    <img src="https://img.tfc.tv/assets/img/unreg/ic-tv.svg" alt="" />
                    <span>Stream on TV via Roku</span>
                </div>
                <div className="stream__item">
                    <img src="https://img.tfc.tv/assets/img/unreg/ic-laptop.svg" alt="" />
                    <span>Laptops and Desktops</span>
                </div>
                <div className="stream__item">
                    <img src="https://img.tfc.tv/assets/img/unreg/ic-mobile.svg" alt="" />
                    <span>Smartphones and Tablets</span>
                </div>
                <div className="stream__item">
                    <img src="https://img.tfc.tv/assets/img/unreg/ic-casting.svg" alt="" />
                    <span>Google Chromecast or Apple Airplay</span>
                </div>         
            </div>
            <div className="stream__question__btn">
                <h3>Don't have an account yet?</h3>
                <button>REGISTER FOR FREE</button>
            </div>
        </div>
    )
}
