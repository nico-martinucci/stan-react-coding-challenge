import './Header.css';

/**
 * TODO:
 */
function Header() {
    return (
        <div className="Header-background">
            <div className="Header-titleDiv">
                <h1 className="Header-title">DEMO Streaming</h1>
            </div>
            <div className="Header-linksDiv">
                <span className="Header-logIn Header-linkContent">Log in</span>
                <button className="Header-trialButton Header-linkContent">Start your free trial</button>
            </div>
        </div>
    )
}


export default Header;