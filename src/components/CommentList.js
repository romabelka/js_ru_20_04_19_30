import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {addComment} from '../AC'
import {connect} from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        comments: PropTypes.array
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
        const {comments = [], isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <div><p>No comments yet</p><CommentForm/></div>
        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
                <CommentForm onSubmit = {this.handleFormSubmit} />
            </div>
        )
    }

    handleFormSubmit = options => {
        const {addComment} = this.props
        options.parentId = this.props.parentId
        addComment(options)
    }
}

export default connect(null, {addComment})(toggleOpen(CommentList))