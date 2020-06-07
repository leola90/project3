import axios from "axios";

const limit = 1;

export default {
    getfunction() {
        return axios.get("https://api.petfinder.com/v2/animals?limit=" + limit);
    },
    // Gets all posts
    getPosts: function () {
        return axios.get("/api/posts");
    },
    // Gets the post with the given id
    getPost: function (id) {
        return axios.get("/api/posts/" + id);
    },
    // Deletes the post with the given id
    deletePost: function (id) {
        return axios.delete("/api/posts/" + id);
    },
    // Saves a post to the database
    savePost: function(PetData) {
        console.log("second check point");
        return axios.post("/api/posts" + PetData);
    }
}

