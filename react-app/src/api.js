class DemoApi {
    static endpoint = "sample.json";

    static async getAll() {
        let response = await fetch(this.endpoint)
            .then((response) => response.json())
            .then((data) => data);

        return response.entries;
    }

    static getTopMovies() {
        let data = this.getAll();
        data = data.filter(t => t.programType === "movie" && t.releaseYear >= 2010);
        data = data.sort() // TODO: sort list alphabetically
        // return the first 21
    }
}

export default DemoApi;