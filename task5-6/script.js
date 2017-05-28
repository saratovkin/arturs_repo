var username = '';
var currentPage = 'index';
var currentPageNum = 0;

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
            "createdAt": new Date('2017-02-23T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/streetsnaps-milan-fashion-week-february-2017-1.jpeg?w=2369"
        },
        {
            "id": itemID++,
            "title": "ОФИЦИАЛЬНЫЙ СПИСОК РЕТЕЙЛЕРОВ YEEZY BOOST 350 V2 ZEBRA",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Обувь"],
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
            "createdAt": new Date('2017-02-25T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/asap-rocky-southside-808-mafia-collab.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "ВЗГЛЯД НА ANTI SOCIAL SOCIAL CLUB X MODERNICA",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Искусство"],
            "createdAt": new Date('2017-02-27T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/02/anti-social-social-club-modernica-eiffel-side-shell-chair-1.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "'More Life' Drake'a собрала почти 90 миллионов прослушиваний",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Музыка"],
            "createdAt": new Date('2017-03-21T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/drake-more-life-90-million-streams-apple-music-1.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "HAVEN x adidas Consortium выпустили черные UltraBOOST",
            "author": "swooqy",
            "content": "ahjsefhjashlefhiulasefhilu asudhfgau sgiouhasfio hasoif joi[asfh sdf hsdf jgsdjf hs;od  as fghlsdk fgsd  dshg oi;dhsfiohj sd sd jsd fgijhds   sdfjgsd kjsdfj jh kljhsdflkjhsdfgkjhsdgharg asiusdfgksdfghsdfg ashiadsfghadsfglhsdfghilusdfghiusdfg sdfghilsdfglhisdfghij",
            "tags": ["Обувь"],
            "createdAt": new Date('2017-03-25T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/haven-adidas-consortium-ultraboost-4.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "Supreme добавили капчу для борьбы с ботами",
            "author": "kkoossttyyaa",
            "content": "add content here",
            "tags": ["Мода"],
            "createdAt": new Date('2017-02-23T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/supreme-captcha-online-store-0001.jpg?w=1382"
        },
        {
            "id": itemID++,
            "title": "небольшое переосмысление adidas originals tubular shadow",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Обувь"],
            "createdAt": new Date('2017-02-24T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/adidas-originals-tubular-shadow-quilted-clear-brown-1.jpg?w=1382"
        },
        {
            "id": itemID++,
            "title": "Art Central Hong Kong 2017. Вид Изнутри ",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Искусство"],
            "createdAt": new Date('2017-02-25T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/art-central-2017-01.jpg?w=2369"
        },
        {
            "id": itemID++,
            "title": "HYPEBEAST Art Basel 2017 Hong Kong: афтерпати с Такаши Мураками",
            "author": "saratovkin",
            "content": "add content here",
            "tags": ["Искусство", "Музыка"],
            "createdAt": new Date('2017-02-26T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/hypebeast-art-basel-2017-takashi-murakami-young-lord-0001.jpg?w=1382"
        },
        {
            "id": itemID++,
            "title": "Майк Хилл для supreme ss17",
            "author": "ivill11",
            "content": "add content here",
            "tags": ["Мода", "Искусство"],
            "createdAt": new Date('2017-02-27T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2017/03/mike-hill-supreme-skate-decks-t-shirts-6.jpg?w=1600"
        },
        {
            "id": itemID++,
            "title": "спортивное ретро: Гоша Рубчинский ss17",
            "author": "swooqy",
            "content": "add content here",
            "tags": ["Мода"],
            "createdAt": new Date('2017-02-28T23:00:00'),
            "summary": "",
            "img": "https://i1.wp.com/hypebeast.com/image/2016/11/gosha-rubchinskiy-2017-spring-summer-closer-look-2.jpg?w=2369"
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

    // function getArticles(skip, top, filterConfig) {
    //     if (skip > itemID) {
    //         return null;
    //     } else {
    //
    //         var news = [];
    //         var index = 0;
    //         var endIndex = 0;
    //         var tag;
    //         articles.sort(compareByDate);
    //         if ((skip + top) > articles.length) {
    //             endIndex = articles.length;
    //         } else {
    //             endIndex = skip + top;
    //         }
    //
    //         for (var i = skip; i < endIndex; i++) {
    //             if (filterConfig == undefined) {
    //                 news[index] = articles[i];
    //
    //             } else {
    //                 tag = filterConfig.tags;
    //                 for (var j = 0; j < articles[i].tags.length; j++) {
    //                     if (articles[i].tags[j] == tag) {
    //                         news[index] = articles[i];
    //                         index++;
    //                     }
    //                 }
    //
    //             }
    //         }
    //             if (articles[i].author == filterConfig.author) {
    //                 news[index] = articles[i];
    //                 index++;
    //             } else {
    //                 if (articles[i].createdAt == filterConfig.createdAt) {
    //                     news[index] = articles[i];
    //                     index++;
    //                 }
    //             }
    //
    //     }
    //     return news;
    // }


    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;

        var newArticles = [];
        articles.forEach(function (item, i, articles) {
            newArticles[i] = item;
        });

        newArticles.sort(function (a, b) {
            return b.createdAt - a.createdAt;
        });

        if (filterConfig) {
            return newArticles.filter(function (element) {
                if (filterConfig.author) {
                    if (element.author !== filterConfig.author) {
                        return false;
                    }
                }

                if (filterConfig.dateFrom) {
                    if (element.createdAt.getTime() <= filterConfig.dateFrom.getTime()) {
                        return false;
                    }
                }

                if (filterConfig.dateTo) {
                    if (element.createdAt.getTime() >= filterConfig.dateTo.getTime()) {
                        return false;
                    }
                }


                if (filterConfig.tag && filterConfig.tag != "") {
                    var flag = false;
                    for (var j = 0; j < element.tags.length; j++) {
                        if (element.tags[j] === filterConfig.tag) {
                            flag = true;
                        }
                    }
                    if (flag === false)
                        return false;
                }

                return true;
            }).slice(skip, skip + top);
        }
        else {
            return newArticles.slice(skip, skip + top);
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

    function getArticlesSize() {
        return articles.length;
    }

    function validateArticle(article) {

        if (article !== null && article !== undefined) {
            if ((typeof article.title === 'string') && (typeof article.author === 'string') && (typeof article.content === 'string') && (article.createdAt instanceof Date)) {
                if ((article.id.length !== 0) && (article.title.length !== 0) && (article.title.length < 100) && (article.author.length !== 0) && (article.content.length !== 0)) {
                    return true;
                }
            }
        }
        return false;
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
        if (typeof newData.content == "string" || newData.content != undefined) {
            article.content = newData.content;
        } else {
            return false;
        }
        if (typeof newData.img == "string" || newData.img != undefined || newData.img != "") {
            article.img = newData.img;
        }

        for (var i = 0; i < articles.length; i++) {
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

    function getAuthors() {
        var n = articles.length, k = 0, result = [];
        for (var i = 0; i < n; i++) {
            var j = 0;
            while (j < k && result[j] !== articles[i].author) j++;
            if (j == k) result[k++] = articles[i].author;
        }
        return result;
    }

    return {
        getArticles: getArticles,
        getArticle: getArticle,
        getArticlesSize: getArticlesSize,
        addArticle: addArticle,
        editArticle: editArticle,
        deleteArticle: deleteArticle,
        getAuthors: getAuthors
    };
}());

var articleRendererService = (function () {
    var currentfilter;
    var articles;

    function setFilter(input) {
        currentfilter = input;
    }

    function getFilter() {
        return currentfilter;
    }

    function renderArticles(skip, top, filter) {
        articleRenderer.removeArticlesFromDom();

        if (filter) {

            articles = articleModel.getArticles(skip, top, filter);
        } else {
            articles = articleModel.getArticles(skip, top);
        }
        var articlesString = JSON.stringify(articles);
        localStorage.setItem("articles", articlesString);

        var articlesNew = JSON.parse(localStorage.getItem("articles"), function (key, value) {
            if (key == 'createdAt') {
                return new Date(value);
            }
            return value;
        });

        articleRenderer.insertArticlesInDOM(articlesNew);
    }

    function editArticle(id, newData) {
        articleModel.editArticle(id, newData);
    }

    function deleteArticle(id) {
        articleModel.deleteArticle(id);
    }

    function addArticle(article) {
        articleModel.addArticle(article);
    }

    function listOfAuthors() {

        var list = '<option value="любой">любой</option>';
        var authors = articleModel.getAuthors().slice(0);
        for (var i = 0; i < authors.length; i++) {
            var str = '<option value="' + authors[i] + '">' + authors[i] + '</option>';
            list = list + str;
        }
        return list;
    }

    function paginateForward() {
        currentPageNum++;
        startApp();
    }

    function paginateBack() {
        currentPageNum--;
        startApp()
    }

    function startApp() {
        articleRenderer.init();
        if (currentfilter) {
            renderArticles(currentPageNum * 5, 5, currentfilter);
        } else {
            renderArticles(currentPageNum * 5, 5);
        }

        if (articleModel.getArticlesSize() <= 5) {
            document.getElementById('down-buttons').style.display = 'none';
        } else {
            document.getElementById('down-buttons').style.display = 'block';
            if (currentPageNum == 0) {
                document.getElementById('pagination-back').style.display = 'none';
            } else {
                document.getElementById('pagination-back').style.display = 'inline';
            }
            if (((currentPageNum + 1) * 5) >= articleModel.getArticlesSize()) {
                document.getElementById('pagination-forward').style.display = 'none';
            } else {
                document.getElementById('pagination-forward').style.display = 'inline';
            }
        }
    }

    return {
        startApp: startApp,
        addArticle: addArticle,
        editArticle: editArticle,
        deleteArticle: deleteArticle,
        renderArticles: renderArticles,
        listOfAuthors: listOfAuthors,
        paginateForward: paginateForward,
        paginateBack: paginateBack,
        setFilter: setFilter,
        getFilter: getFilter
    };


}());

var articleRenderer = (function () {

    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init() {
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector('.article-list');
        var authorsList = articleRendererService.listOfAuthors();
        document.querySelector(".search-authors").innerHTML = authorsList;

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
        template.content.querySelector('.article-list-item-tags').textContent = "Тэги:" + article.tags;

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
        removeArticlesFromDom: removeArticlesFromDom,
        formatDate: formatDate
    };
}());

var filterService = (function () {

    function clear() {
        document.querySelector('.search-authors').selectedIndex = 0;
        document.getElementById('search-date-from').value = '';
        document.getElementById('search-date-to').value = '';
        document.querySelector('.search-tag').value = 'Любая';
        if (articleRendererService.getFilter) {
            articleRendererService.setFilter(null);
            currentPageNum = 0;
        }
    }

    function create() {
        var filter = {
            author: '',
            dateFrom: null,
            dateTo: null,
            tag: ''
        }
        var select = document.querySelector('.search-authors');
        var dateFrom = document.getElementById('search-date-from');
        var dateTo = document.getElementById('search-date-to');

        var searchtag = document.querySelector('.search-tag');

        if (select.selectedIndex != 0) {
            filter.author = select.options[select.selectedIndex].value;
        }
        if (dateFrom.value && dateTo.value) {
            filter.dateFrom = new Date(dateFrom.value);
            filter.dateTo = new Date(dateTo.value);
        }
        if (searchtag.value && searchtag.value != "Любая") {
            filter.tag = searchtag.value;
        }
        return filter;
    }

    function apply() {
        var filter = create();

        if (filter == articleRendererService.getFilter()) {
            return;
        }
        if (!filter) {
            return;
        }
        articleRendererService.setFilter(filter);
        articleRenderer.removeArticlesFromDom();
        articleRendererService.startApp();
        currentPageNum = 0;
    }

    function getByTag(filter) {
        articleRendererService.setFilter(filter);
        articleRenderer.removeArticlesFromDom();
        articleRendererService.startApp();
        currentPageNum = 0;
    }

    return {
        apply: apply,
        clear: clear,
        getByTag: getByTag
    }
})();

var contentService = (function () {

    function openPageIndex() {
        window.scrollTo(0, 0);
        document.querySelector('.article-list').style.display = 'block';
        document.getElementById('full-post').style.display = 'none';
        articleRendererService.startApp();


        if (username) {

            document.querySelector('.user').textContent = username;
            var nodes = document.querySelectorAll('.editing');
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].style.display = 'visible';
            }
            document.querySelector(".add-news").style.display = 'inline-block';
        } else {
            document.querySelector('.user').textContent = "Войти";
            var nodes = document.querySelectorAll('.editing');
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].style.display = 'none';
            }
            document.querySelector(".add-news").style.display = 'none';
        }
        articleRendererService.setFilter(null);
        currentPage = 'index';
        currentPageNum = 0;
    }

    function openPageFull(input) {
        document.getElementById('down-buttons').style.display = 'none';
        document.querySelector('.article-list').style.display = 'none';
        document.getElementById('full-post').style.display = 'block';
        var article = articleModel.getArticle(input.dataset.id);
        document.getElementById('full-post').dataset.id = article.id;
        document.querySelector('.full-post-title').textContent = article.title;
        document.querySelector('.full-post-img').src = article.img;
        document.querySelector('.full-post-content').textContent = article.content;
        document.querySelector('.full-post-date').textContent = articleRenderer.formatDate(article.createdAt);
        document.querySelector('.full-post-author').textContent = "Автор:" + article.author;
        if (username) {
            document.querySelector('.full-post-edit-box').style.display = 'block';
        } else {
            document.querySelector('.full-post-edit-box').style.display = 'none';
        }
        currentPage = 'full';
    }

    return {
        // openPageNew: openPageNew,
        // openPageAbout: openPageAbout,
        // openPageEdit: openPageEdit,
        openPageIndex: openPageIndex,
        openPageFull: openPageFull
    }
}());

var loginService = (function () {

    var database = [
        {
            login: 'saratovkin',
            password: '1234'
        }
    ];
    var currentlogin;
    var currentpassword;

    function handleLogin() {
        var box = document.getElementById('login-input');
        currentlogin = box.elements[0].value;
        currentpassword = box.elements[1].value;
        validate(currentlogin, currentpassword);
    }

    function handleCancel() {
        var box = document.getElementById('login-input');
        box.elements[0].value = '';
        box.elements[1].value = '';
    }

    function validate(log, pass) {
        if (checkSize(log, pass)) {
            if (checkInfo(log, pass)) {
                username = log;
                currentPage = 0;
                contentService.openPageIndex();
                var form = document.getElementById('login-input');
                form.elements[0].value = '';
                form.elements[1].value = '';
            } else {
                makeError("Неверные данные");
            }
        }
    }

    function checkSize(inlog, inpass) {
        if (!inlog) {
            makeError("Ошибка. Введите логин");
            return false;
        }
        if (inlog.length > 10) {
            makeError("слишком длинный логин");
            return false;
        }
        if (!inpass) {
            makeError("Ошибка. Введите пароль");
            return false;
        }
        if (inpass.length > 10) {
            makeError("слишком длинный пароль");
            return false;
        }
        return true;
    }

    function checkInfo(log, pass) {
        for (var i = 0; i < database.length; i++) {
            if (database[i].login === log && database[i].password === pass) {
                username = log;
                return true;
            }
        }
        return false;
    }

    function makeError(input) {
        document.querySelector('.login-error').style.display = 'block';
        document.querySelector('.login-error').textContent = input;
    }

    return {
        handleLogin: handleLogin,
        handleCancel: handleCancel
    }
}());

var editService = (function () {

    var current;

    function addError(input) {
        document.querySelector('.add-error').textContent = "Ошибка. Неверные данные"
    }

    function validateAdd() {
        var title = document.getElementById('titlebox').value;
        var content = document.getElementById('contentbox').value;
        var imgbox = document.getElementById('imgbox').value;
        return validate(title, content, imgbox);
    }

    function validate(title, content, imgbox) {
        if (title.length > 50) {
            addError("Ошибка. Заголовок слишком длинный");
            return false;
        }

        return true;
    }

    function validateEdit() {
        var title = document.getElementById('edit-titlebox').value;
        var content = document.getElementById('edit-contentbox').value;
        var imgbox = document.getElementById('edit-imgbox').value;
        return validate(title, content, imgbox);
    }

    function createArticle() {

        var id = 0;
        var title = document.getElementById('titlebox').value;
        var content = document.getElementById('contentbox').value;
        var img = document.getElementById('imgbox').value;
        var author = username;
        var tags = [];
        tags[0] = document.getElementById('tagbox').value;
        var createdAt = new Date();
        var article = {
            id: id,
            title: title,

            createdAt: createdAt,
            author: author,
            content: content,
            img: img,
            tags: tags
        }
        return article;
    }

    function createTempArticle() {
        var id = 0;

        var title = document.getElementById('edit-titlebox').value;
        var content = document.getElementById('edit-contentbox').value;
        var img = document.getElementById('edit-imgbox').value;

        var article = {
            id: id,
            title: title,
            content: content,
            img: img
        }
        return article;
    }

    function addArticle() {
        var art = createArticle();
        articleModel.addArticle(art);

    }

    function editArticle() {
        var art = createTempArticle();
        articleModel.editArticle(current, art);
    }

    function handleClear() {
        document.getElementById('titlebox').value = '';
        document.getElementById('contentbox').value = '';
        document.getElementById('imgbox').value = '';
    }

    function handleAdd() {

        if (validateAdd()) {
            addArticle();
            handleClear();
            contentService.openPageIndex();
        }
    }

    function handleEdit() {

        if (validateEdit()) {
            editArticle();
            handleClear();
            contentService.openPageIndex();
        }
    }

    function handleDelete(deleteId) {
        articleModel.deleteArticle(deleteId.dataset.id);
        contentService.openPageIndex();

    }

    function setEdited(input) {
        current = input.dataset.id;
    }

    return {
        handleClear: handleClear,
        handleEdit: handleEdit,
        handleDelete: handleDelete,
        handleAdd: handleAdd,
        setEdited: setEdited
    }

}());


document.addEventListener('DOMContentLoaded', contentService.openPageIndex);
