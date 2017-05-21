import {createSelector} from 'reselect'

export const articlesGetter = state => state.articles
export const filtersGetter = state => state.filters
export const commentsGetter = state => state.comments
export const idGetter = (state, props) => props.id

export const filteredArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters

    return articles.articlesIds.filter(id => {
    	let article = articles[id];
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id]
})

export const articleSelectorFactory = () => createSelector(articlesGetter, idGetter, (articles, id) => {
    return articles[id]
})