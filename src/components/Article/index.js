import React, {Component} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC/index'
import {articleSelectorFactory} from '../../selectors/'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillUpdate() {
        console.log('---', 'updating')
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                </h2>
                <a href = "#" onClick = {this.handleDelete}>delete me</a>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments} 
                             parentId = {this.props.article.id}/>
            </div>
        )
    }
}

function createMapStateToProps() {
    const articleSelector = articleSelectorFactory()

    return function mapStateToProps(state, ownProps) {
        return {
            article: articleSelector(state, ownProps)
        }
    }
}

export default connect(createMapStateToProps, { deleteArticle })(Article)
