import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import Loader from './Loader'
import {loadArticlesComments} from '../AC'
import {connect} from 'react-redux'

class CommentList extends Component {
    componentWillReceiveProps({ article, isOpen, loadArticlesComments }) {
        if (isOpen && !article.loadedComments && !article.loadingComments) loadArticlesComments(article.id)
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article: { loadedComments, loadingComments, id, comments = [] }, isOpen, commentsData} = this.props
        if (!isOpen) return null
        if (loadingComments) return <Loader/>
        if (!loadedComments) return null

        if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId = {id}/></div>

        let extractedComments = comments.map((id) => {
            return commentsData.getIn(['entities', id])
        });

        return (
            <div>
                <ul>
                    {extractedComments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    article: PropTypes.object
}

export default connect((state => {
    return {
        commentsData: state.comments
    }
}), { loadArticlesComments })(toggleOpen(CommentList))