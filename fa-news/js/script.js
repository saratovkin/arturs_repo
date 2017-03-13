var username = "saratovkin";
//username = null;
var articleModel = (function () {
    var itemID = 0;
    var articles = [
        {
            "id": itemID++,
            "title": "ПЕРВЫЙ ВЗГЛЯД НА КОЛЛЕКЦИЮ PALACE SS17",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Мода"],
            "createdAt": new Date('2017-03-03T23:00:00'),
            "summary": "",
            "img": "http://static.highsnobiety.com/wp-content/uploads/2017/02/17125159/palace-ss17-collection-00.jpg"
        },
        {
            "id": itemID++,
            "title": "НЕДЕЛЯ МОДЫ В МИЛАНЕ: ФЕВРАЛЬ 2017",
            "author": "ivill11",
            "content": "add content here",
            "tags": ["Мода", "Искусство"],
            "createdAt": new Date('2018-02-23T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/streetsnaps-milan-fashion-week-february-2017-1.jpeg?w=2369"
        },
        {
            "id": itemID++,
            "title": "ОФИЦИАЛЬНЫЙ СПИСОК РЕТЕЙЛЕРОВ YEEZY BOOST 350 V2 ZEBRA",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Обувь", "Мода"],
            "createdAt": new Date('2017-01-25T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/yeezy-boost-350-v2-zebra-store-list-1.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "СОВМЕСТНАЯ КОЛЛЕКЦИЯ BAPE X \'KONG: SKULL ISLAND\'",
            "author": "kkoossttyyaa",
            "content": "add content here",
            "tags": ["Мода"],
            "createdAt": new Date('2017-02-22T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/bape-kong-skull-island-collection-2.jpg?w=1382"
        },
        {
            "id": itemID++,
            "title": "НОВЫЙ РЕЛИЗ A$AP ROCKY И 808 MAFIA\'S SOUTHSIDE НА ПОДХОДЕ",
            "author": "swooqy",
            "content": "add content here",
            "tags": ["Музыка"],
            "createdAt": new Date('2017-02-26T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/asap-rocky-southside-808-mafia-collab.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "ВЗГЛЯД НА ANTI SOCIAL SOCIAL CLUB X MODERNICA",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Мода", "Искусство"],
            "createdAt": new Date('2017-02-27T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/anti-social-social-club-modernica-eiffel-side-shell-chair-1.jpg?w=2369"
        }
    ];


    function compareByDate(a, b) {

        if (a.createdAt > b.createdAt) {
            return -1;
        }
        if (a.createdAt < b.createdAt) {
            return 1;
        }
    }

    function getArticles(skip, top, filterConfig) {
        if (skip > itemID) {
            return null;
        } else {

            var news = [];
            var index = 0;
            var endIndex = 0;
            articles.sort(compareByDate);
            if ((skip + top) > articles.length) {
                endIndex = articles.length;
            } else {
                endIndex = skip + top;
            }

            for (var i = skip; i < endIndex; i++) {
                if (filterConfig == undefined) {
                    getArticles(0, 8, {tags: "Мода"})
                    news[index] = articles[i];
                } else {
                    if (articles[i].author == filterConfig.author) {
                        news[index] = articles[i];
                    } else {
                        if (articles[i].createdAt == filterConfig.createdAt) {
                            news[index] = articles[i];
                        }
                    }
                }
                index++;

            }
            return news;
        }
    }

    function getArticle(id) {
        for (var i = 0; i < articles.length; i++) {
            if (articles[i].id == id) {
                return articles[i];
            }
        }
        return -1;
    }

    function validateArticle(article) {
        if (typeof article.id != "number") {  //сделал числовые айди, по мне так удобнее
            console.log('1');       //все логи чтобы удобнее проверять по какому именно параметру не прошла новая новость
            return false;
        }
        for (var i = 0; i < articles.length; i++) {

            if (articles[i].id == article.id) {
                console.log('2');
                return false;
            }
        }
        if (typeof article.title != "string" || article.title.length > 100 || article.title == undefined) {
            console.log('3');
            return false;
        }
        if (typeof article.summary != "string" || article.summary.length > 200) {
            console.log('4');
            return false;
        }
        if (typeof article.createdAt != "object") { //почему-то typeof article.createdAt получается object хотя в массиве создаем как Date
            console.log('5');
            return false;
        }
        if (typeof article.author != "string" || article.author == undefined) {
            console.log('6');
            return false;
        }
        if (typeof article.content != "string" || article.content == undefined) {
            console.log('7');
            return false;
        }
        if (article.tags.length == 0) {
            console.log('8');
            return false;
        }
        return true;
    }

    function addArticle(article) {
        if (!validateArticle(article)) {
            return false;
        } else {
            article.id = itemID;
            articles[itemID] = article;
            return true;
        }
    }

    function editArticle(id, newData) {
        var article = getArticle(id);
        if (typeof newData.title == "string" || newData.title.length <= 100 || newData.title != undefined) {
            article.title = newData.title;
        } else {
            return false;
        }
        if (typeof newData.summary == "string" || newData.summary.length <= 200) {
            article.summary = newData.summary;
        } else {
            return false;
        }
        if (typeof newData.content == "string" || article.content != undefined) {
            article.content = newData.content;
        } else {
            return false;
        }
        for (var i = 0; i < articles.length; i++) {    //заменяем старую новость на новую по айди

            if (articles[i].id == article.id) {
                articles[i] = article;
            }
        }
        return true;
    }

    function deleteArticle(id) {
        for (var i = 0; i < articles.length; i++) {

            if (articles[i].id == id) {
                articles.splice(i, 1);
            }
        }
        return true;
    }

    return {
        getArticles: getArticles,
        getArticle: getArticle,
        addArticle: addArticle,
        editArticle: editArticle,
        deleteArticle: deleteArticle
    };
}())

var articleRenderer = (function () {

    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.article-list');
    }

    function insertArticlesInDOM(articles) {
        var articlesNodes = renderArticles(articles);
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom() {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function renderArticles(articles) {
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {

        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
        template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = "Автор:" + article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.article-list-item-img').src = article.img;
        template.content.querySelector('.article-list-item-tags').textContent = "здесь должны быть тэги";

        return template.content.querySelector('.article-list-item').cloneNode(true);
    }

    function formatDate(d) {

        var month;
        num = d.getMonth();
        if (num == 0) {
            month = "января";
        }
        if (num == 1) {
            month = "февраля";
        }
        if (num == 2) {
            month = "марта";
        }
        if (num == 3) {
            month = "апреля";
        }
        if (num == 4) {
            month = "мая";
        }
        if (num == 5) {
            month = "июня";
        }
        if (num == 6) {
            month = "июля";
        }
        if (num == 7) {
            month = "августа";
        }
        if (num == 8) {
            month = "сентября";
        }
        if (num == 9) {
            month = "октября";
        }
        if (num == 10) {
            month = "ноября";
        }
        if (num == 11) {
            month = "декабря";
        }
        return d.getDate() + ' ' + month + ' ' + d.getFullYear();
    }

    return {

        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {

    var param = {};
    articleRenderer.init();

    renderArticles(0, 10);
    deleteArticle(3);
    if (username) {
        document.querySelector('.user').textContent = username;
    } else {
        document.querySelector('.user').textContent = "Войти";
        var nodes = document.querySelectorAll('.edit');
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].style.display = 'none';
        }
        document.querySelector(".add-news").style.display = 'none';
    }
}

function renderArticles(skip, top, param) {

    articleRenderer.removeArticlesFromDom();
    var articles = articleModel.getArticles(skip, top, param);
    articleRenderer.insertArticlesInDOM(articles);
}

function editArticle(id, editedarticle) {
    articleModel.editArticle(id, editedarticle);
}

function deleteArticle(id) {
    articleModel.deleteArticle(id);
}

function addArticle(article) {
    articleModel.addArticle(article);
}