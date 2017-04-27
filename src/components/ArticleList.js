import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default function ArticleList({ articles }) {
    const elements = articles.map(article => <li key={article.id}><Article article={article}/></li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array
}