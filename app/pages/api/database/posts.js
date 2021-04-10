
const database = require("../../../components/Database/Database");

export default async (req, res) => {
    var data = await getPostsData();
    res.status(200).json(data);
}

export async function getPostsData() {
    var posts = [];

    await database.selectAll("posts").then(function (result) {
        posts = parsePosts(result);
    })

    return posts;
}

function parsePosts(posts) {
    var parsedPosts = [];

    for(var i = 0; i < posts.length; i++) {
        parsedPosts[i] = parsePost(posts[i]);
    }

    return parsedPosts;
}

function parsePost(post) {
    return {
        body: post.body,
        date: post.date
    }
}