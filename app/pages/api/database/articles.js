
const database = require("../../../components/Database/Database");

export default async (req, res) => {
    var data = await getArticlesData();
    res.status(200).json(data);
}

export async function getArticlesData() {
    var articles;

    await database.selectAll("articles").then(function (result) {
        articles = parseArticles(result);
    })

    return articles;
}

export async function getArticle(articleNr) {
    var article;

    await database.select("articles", {nr: articleNr}).then(function (result) {
        article = parseArticle(result[0])
    });

    return article;
}

function parseArticles(articles) {
    var parsedArticles = [];

    for(var i = 0; i < articles.length; i++) {
        var article = parseArticle(articles[i])

        parsedArticles[i] = article;
    }

    return parsedArticles;
}

function parseArticle(article) {
    return {
        title: article.title,
        body: article.body,
        img: article.img,
        nr: article.nr
    }
}