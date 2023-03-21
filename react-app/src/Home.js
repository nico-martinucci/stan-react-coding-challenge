import CategoryTile from "./CategoryTile"
import TitleBar from "./TitleBar"
import "./Home.css"

/**
 * TODO:
 */
function Home() {
    const categories = ["series", "movies"];

    return (
        <div className="Home-container">
            <TitleBar pageTitle="Popular Titles" />
            <div className="Home-categories">
                {categories.map(c => (
                    <CategoryTile title={c} />
                ))}
            </div>
        </div>
    )
}


export default Home;