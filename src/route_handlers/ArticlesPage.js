import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        const {match} = this.props
        return (
            <div>
                <ArticleList match = {match} />
                <Route path = {`${match.url}/:id`} render = {this.getActiveArticle}/>
            </div>
        )
    }

    getActiveArticle = ({match}) => {
        return <Article id = {match.params.id} isOpen />
    }
}

export default ArticlesPage