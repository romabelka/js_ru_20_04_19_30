import { INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload : { id }
    }
}

export function filterArticles(ids = []) {
	return {
		type: FILTER_ARTICLES,
		payload: {
			ids
		}
	}
}
