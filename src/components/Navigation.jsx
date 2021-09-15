import React,{ useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation() {

    // NAVIGATION TOGGLE USING USESTATE AND USEEFFECT

    const [navigation, setNavigation] = useState(false);

    const navtoggle = () => {
        setNavigation(!navigation)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth) 

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

    }, [])


    return (
        <div className="navigation">
            <div className="navigation__container">
                <div className="navigation__menu__logo">
                    <div className="navigation__menu" onClick={navtoggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <img src="https://play-lh.googleusercontent.com/mGrn6jWJr6qdlhA86n7KKoOEjZKnlHdTzbWtbmrXC6Sf41Wor6dCUCXxO2OB2VPxxb8" alt="" />
                    {(navigation || screenWidth > 1100) && (
                        <div className="navigation__links">
                        <ul className="navigation__ul">
                            <li className="navigation__li">SHOWS</li>
                            <li className="navigation__li">MOVIES</li>
                            <li className="navigation__li">PLANS</li>
                            <li className="navigation__li italic">SEE ALL FREE</li>
                        </ul>
                    </div>
                    )}
                    
                </div>
                <div className="navigation__login">
                    <h3>LOG IN</h3>
                </div>
            </div>
        </div>
    )
}
