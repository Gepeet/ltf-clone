import './IwantTfc.css'

export default function IwantTfc() {
    return (
        <div className="iwant">
            <h1>What's Playing on iWantTFC</h1>
            <div className="iwant__card__container">
                <div className="iwant__card saIyo">
                    <div className="card__top">
                        <div className="card__title">Teleseryes</div>
                        <p className="card__details">Watch the hottest shows from ABS-CBN</p>
                    </div>
                    <div className="card__bot">
                        <p className="card__show">Ang sa Iyo ay Akin</p>
                    </div>
                </div>

                <div className="iwant__card hello">
                    <div className="card__top">
                        <div className="card__title">Movies</div>
                        <p className="card__details">Our biggest Filipino box office blockbusters</p>
                    </div>
                    <div className="card__bot">
                        <p className="card__show">Hello, Love Goodbye</p>
                    </div>
                </div>

                <div className="iwant__card asap">
                    <div className="card__top">
                        <div className="card__title">Live Programs</div>
                        <p className="card__details">Enjoy top-notch entertainment from world-class performers</p>
                    </div>
                    <div className="card__bot">
                        <p className="card__show">ASAP</p>
                    </div>
                </div>

                <div className="iwant__card news">
                    <div className="card__top">
                        <div className="card__title">Live News</div>
                        <p className="card__details">Be updated with the latest news from the Philippines</p>
                    </div>
                    <div className="card__bot">
                        <p className="card__show">ANC</p>
                    </div>
                </div>
            </div>
            <button className="watchnow__btn">WATCH NOW</button>

            {/* <input type="submit" className="watchnow__btn" value="WATCH NOW" /> */}
        </div>
    )
}
