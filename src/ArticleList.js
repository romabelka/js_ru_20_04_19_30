import React from 'react'
import Article from './Article'

export default function ArticleList({ articles }) {
    const elements = articles.map(article => <li><Article article={article}/></li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}