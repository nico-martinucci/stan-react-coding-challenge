import "./TitleBar.css"

/**
 * TODO:
 */
function TitleBar({ pageTitle }) {
    return (
        <div className="TitleBar-container">
            <h2 className="TitleBar-title">{pageTitle}</h2>
        </div>
    )
}

export default TitleBar;