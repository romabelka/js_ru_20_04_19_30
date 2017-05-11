import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

function ArticleList({articles, toggleOpenItem, isItemOpened}) {
    const elements = articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={isItemOpened(article.id)}
                 toggleOpen={toggleOpenItem(article.id)}/>
    </li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

export default accordion(ArticleList)