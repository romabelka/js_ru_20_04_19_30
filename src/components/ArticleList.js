import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props

        const elements = articles.map(id => <li key={id}>
            <Article id = {id}
                     isOpen = {isItemOpened(id)}
                     toggleOpen = {toggleOpenItem(id)}
                     ref = {id}
            />
        </li>)
        return (
            <ul ref={this.getContainerRef}>
                {elements}
            </ul>
        )
    }

    getContainerRef = ref => {
        this.list = ref
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => ({
    articles: filteredArticlesSelector(state)
}))(accordion(ArticleList))