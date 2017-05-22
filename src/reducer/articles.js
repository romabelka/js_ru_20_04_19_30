import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'
import {arrayToMap} from '../utils'

export default (articles = arrayToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action
    switch (type) {
        case DELETE_ARTICLE:
            const tmpArticles = articles
            delete tmpArticles[payload.id]
            return tmpArticles

        case ADD_COMMENT:
            return {
                ...articles,
                [payload.articleId]: {
                    ...articles[payload.articleId],
                    comments: (articles[payload.articleId].comments || []).concat(randomId)
                }
            }
    }

    return articles
}
