import { articles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

function getFilters() {
    return defaultArticles.map(article => {
        const {id, title} = article
        return {
            id,
            title
        }
    })
}

let defaultArticlesData = {
    articles: defaultArticles,
    filters: getFilters()
}

export default (articlesData = defaultArticlesData, action) => {
    const {type, payload} = action
    let newArticlesState = articlesData

    switch (type) {
        case DELETE_ARTICLE:
            newArticlesState.articles = newArticlesState.articles.filter(article => article.id !== payload.id)
            return Object.assign({}, newArticlesState, articlesData);
            break
        case FILTER_ARTICLES:
            let { ids: {ids} } = payload;

            let reducedArticles = defaultArticles.filter((article => {
                let articleInFilter = false;

                ids.forEach(id => {
                    if (article.id === id) {
                        articleInFilter = true;
                    }
                })

                return articleInFilter;
            }));

            if (reducedArticles.length === 0) {
                reducedArticles = defaultArticles
            }

            newArticlesState.articles = reducedArticles
            return Object.assign({}, newArticlesState, articlesData)
            break;
    }

    return articlesData
}
