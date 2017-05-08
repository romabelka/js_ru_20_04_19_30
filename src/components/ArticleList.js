import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const {toggleArticle, openArticleId} = props
    const elements = props.articles.map(article => <li key={article.id}>
        <Article article={article}
                 isOpen={article.id == openArticleId}
                 toggleOpen={toggleArticle(article.id)}/>
    </li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array
}

export default accordion(ArticleList);