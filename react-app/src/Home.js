import CategoryTile from "./CategoryTile"

/**
 * TODO:
 */
function Home() {
    const categories = ["series", "movies"];

    return (
        <div>
            <h1>Home</h1>
            <CategoryTile title="series" />
            <CategoryTile title="movies" />
        </div>
    )
}


export default Home;