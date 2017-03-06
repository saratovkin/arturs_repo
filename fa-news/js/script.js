var itemID = 0;

var articles = [
    {
        id: itemID++,
        title: 'ПЕРВЫЙ ВЗГЛЯД НА КОЛЛЕКЦИЮ PALACE SS17',
        author: 'saratovkin',
        content: 'add content here',
        tags: ["Мода"],
        createdAt: new Date('2017-02-25T23:00:00'),
        summary: ''
    },
     {
        id: itemID++,
        title: 'НЕДЕЛЯ МОДЫ В МИЛАНЕ: ФЕВРАЛЬ 2017',
        author: 'ivil11',
        content: 'add content here',
        tags: ["Мода", "Искусство"],
        createdAt: new Date('2018-02-23T23:00:00'),
        summary: ''
    },
    {
        id: itemID++,
        title: 'ОФИЦИАЛЬНЫЙ СПИСОК РЕТЕЙЛЕРОВ YEEZY BOOST 350 V2 ZEBRA',
        author: 'saratovkin',
        content: 'add content here',
        tags: ["Обувь", "Мода"],
        createdAt: new Date('2017-02-25T23:00:00'),
        summary: ''
    },
    {
        id: itemID++,
        title: 'СОВМЕСТНАЯ КОЛЛЕКЦИЯ BAPE X \'KONG: SKULL ISLAND\'',
        author: 'kkoossttyyaa',
        content: 'add content here',
        tags: ["Мода"],
        createdAt: new Date('2017-02-22T23:00:00'),
        summary: ''
    },
    {
        id: itemID++,
        title: 'НОВЫЙ РЕЛИЗ A$AP ROCKY И 808 MAFIA\'S SOUTHSIDE НА ПОДХОДЕ',
        author: 'swooqy',
        content: 'add content here',
        tags: ["Музыка"],
        createdAt: new Date('2017-02-26T23:00:00'),
        summary: ''
    },
    {
        id: itemID++,
        title: 'ВЗГЛЯД НА ANTI SOCIAL SOCIAL CLUB X MODERNICA',
        author: 'saratovkin',
        content: 'add content here',
        tags: ["Мода", "Искусство"],
        createdAt: new Date('2017-02-27T23:00:00'),
        summary: ''
    }
];

function compareByDate(a, b) {
    if(a.createdAt > b.createdAt){
        return 1;
    }
    if(a.createdAt < b.createdAt){
        return -1;
    }
}

function getArticles(skip,top,filterConfig){
    if(skip > itemID){
        return null;
    } else {
        
            var news = [];
            var index = 0;
            var endIndex = 0;
            articles.sort(compareByDate);
//            articles.forEach(function (item, i, articles) {
//                console.log(item.id + " " + item.title + " " + item.author + " " + item.content + " " + item.tags + " " + item.createdAt);
//            });
            if((skip + top)>articles.length){
                endIndex = articles.length;
            }else{
                endIndex = skip + top;
            }
        
            for(var i = skip; i < endIndex; i++){
                if(filterConfig == undefined){
                    news[index] = articles[i];
                } else{
                    if(articles[i].author == filterConfig.author){
                        news[index] = articles[i];
                    } else{
                        if(articles[i].createdAt == filterConfig.createdAt){
                            news[index] = articles[i];
                        }
                    }
                }
                index++;
                
            }
            return news;
    }
}

function getArticle(id){
   for(var i = 0; i < articles.length; i++){
             if(articles[i].id == id){
                 return articles[i];
             }
   } 
    return -1;
}

function validateArticle(article){
    if(typeof article.id != "number" ){  //сделал числовые айди, по мне так удобнее
        console.log('1');       //все логи чтобы удобнее проверять по какому именно параметру не прошла новая новость
        return false;
    }
    for(var i = 0; i < articles.length; i++){
        
        if(articles[i].id == article.id){
            console.log('2');
            return false;
        }
    }
    if(typeof article.title != "string" || article.title.length > 100 || article.title == undefined){
        console.log('3');
        return false;
    }
    if(typeof article.summary != "string" || article.summary.length > 200){
        console.log('4');
        return false;
    }
    if(typeof article.createdAt != "object"){ //почему-то typeof article.createdAt получается object хотя в массиве создаем как Date
        console.log('5');
        return false;
    }
    if(typeof article.author != "string" || article.author == undefined ){
        console.log('6');
        return false;
    }
    if(typeof article.content != "string" || article.content == undefined ){
        console.log('7');
       return false; 
    }
    if(article.tags.length == 0){
        console.log('8');
        return false;
    }
    return true;
}

function addArticle(article){
    if(!validateArticle(article)){
        return false;
    }else{
        article.id = itemID;
        articles[itemID] = article;
        return true;
    }
}

function editArticle(id,newData){
   var article = getArticle(id);
    if(typeof newData.title == "string" || newData.title.length <= 100 || newData.title != undefined){
        article.title = newData.title;
    }else{
        return false;
    }
    if(typeof newData.summary == "string" || newData.summary.length <= 200){
        article.summary = newData.summary;
    }else{
        return false;
    }
    if(typeof newData.content == "string" || article.content != undefined ){
        article.content = newData.content;
    } else{
        return false;
    }
    for(var i = 0; i < articles.length; i++){    //заменяем старую новость на новую по айди
        
        if(articles[i].id == article.id){
            articles[i]=article;
        }
    }
    return true;
}

function removeArticle(id){
    for(var i = 0; i < articles.length; i++){    //заменяем старую новость на новую по айди
        
        if(articles[i].id == id){
            articles.splice(i,1);
        }
    }
    return true;
}