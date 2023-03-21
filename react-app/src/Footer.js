import { ReactComponent as FacebookLogo } from "./social/facebook-white.svg";
import { ReactComponent as InstagramLogo } from "./social/instagram-white.svg";
import { ReactComponent as TwitterLogo } from "./social/twitter-white.svg";
import { ReactComponent as AppStoreLogo } from "./store/app-store.svg";
import { ReactComponent as PlayStoreLogo } from "./store/play-store.svg";
import { ReactComponent as WindowsStoreLogo } from "./store/windows-store.svg";
import "./Footer.css"

/**
 * TODO:
 */
function Footer() {
    return (
        <div className="Footer-background">
            <div className="Footer-linksDiv">
                <a className="Footer-link" href="#">Home</a>|
                <a className="Footer-link" href="#">Terms and Conditions</a>|
                <a className="Footer-link" href="#">Privacy Policy</a>|
                <a className="Footer-link" href="#">Collection Statement</a>|
                <a className="Footer-link" href="#">Help</a>|
                <a className="Footer-link" href="#">Manage Account</a>
            </div>
            <span className="Footer-copyright">
                Copyright @ 2016 DEMO Streaming All Rights Reserved
            </span>
            <div className="Footer-iconsDiv">
                <div className="Footer-socialMedia">
                    <FacebookLogo className="Footer-socialLogo" />
                    <TwitterLogo className="Footer-socialLogo" />
                    <InstagramLogo className="Footer-socialLogo" />
                </div>
                <div className="Footer-externalLinks">
                    <AppStoreLogo className="Footer-storeLogo" />
                    <PlayStoreLogo className="Footer-storeLogo" />
                    <WindowsStoreLogo className="Footer-storeLogo" />
                </div>
            </div>
        </div>
    )
}


export default Footer;