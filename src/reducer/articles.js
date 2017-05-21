import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants'

const articlesMap = defaultArticles.reduce((acc, article) => ({
	...acc, [article.id]: article
}), {})

const articlesIds = Object.keys(articlesMap).map((id) => {
	return id;
})

articlesMap.articlesIds = articlesIds

export default (articles = articlesMap, action) => {
    const {type, payload} = action
    switch (type) {
        case DELETE_ARTICLE:
	        return {...articles, articlesIds: articles.articlesIds.filter(id => id !== payload.id)}
	        break
	  	case ADD_COMMENT:
	  		const {parentId, id} = payload
	  		let comments = [...articles[payload.parentId]['comments']];
	  		comments.push(id)
	  		let parentArticle = {...articles[parentId]}
	  		parentArticle.comments = comments
	  		return {...articles, [parentId]: parentArticle}
	  		break
    }

    return articles
}
