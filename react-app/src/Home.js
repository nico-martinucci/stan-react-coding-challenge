import CategoryTile from "./CategoryTile"
import "./Home.css"

/**
 * TODO:
 */
function Home() {
    const categories = ["series", "movies"];

    return (
        <div className="Home-categories">
            {categories.map(c => (
                <CategoryTile title={c} />
            ))}
        </div>
    )
}


export default Home;