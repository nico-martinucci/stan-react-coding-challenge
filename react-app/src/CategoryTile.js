import "./CategoryTile.css"
import { Link } from "react-router-dom";

/**
 * TODO:
 */
function CategoryTile({ title }) {

    const description = title.split("");
    description[0] = description[0].toUpperCase();

    return (
        <div className="CategoryTile-container">
            <Link to={`/${title}`}>
                <div className="CategoryTile-background">
                    <h2 className="CategoryTile-title">{title.toUpperCase()}</h2>
                    <img className="CategoryTile-placeholder" src="placeholder.png" />
                </div>
            </Link>
            <span className="CategoryTile-description">Popular {description.join("")}</span>
        </div>
    )
}


export default CategoryTile;