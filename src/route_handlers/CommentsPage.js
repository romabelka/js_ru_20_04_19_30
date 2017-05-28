import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Comment from '../components/Comment'
import { connect } from 'react-redux'
import { loadComments } from '../AC'
import Loader from '../components/Loader'
import { NavLink } from 'react-router-dom'

class CommentsPage extends Component {
	static propTypes = {
		comments: PropTypes.array
	}

	componentDidMount() {
		const { loadComments, match } = this.props
		const offset = handleOffset(match.params.page);
		loadComments(offset)
	}

	componentWillReceiveProps(nextProps) {
		const { loadComments, match } = nextProps
		if (this.props.match.params.page != match.params.page && !nextProps.comments) {
			const offset = handleOffset(match.params.page);
			loadComments(offset)
		}
	}

	render() {
		const { match, comments } = this.props
		return (
				<div>
					{this.getComments(comments)}
					<ul>
						{this.getPagination()}
					</ul>
				</div>
			)
	}

	getComments(comments) {
		if (this.props.loading) {
			return <Loader />
		}

		if (comments) {
			return comments.map(comment => {
				return <Comment key = {comment.id} comment = {comment} />
			})
		}
	}

	getPagination() {
		const { comentsQuantity } = this.props
		let paginationQuantity = Math.floor(comentsQuantity / 5);
		let quantityRest = Math.ceil(comentsQuantity % 5);
		paginationQuantity += quantityRest
		let elements = [];

		for (let i = 1; i < paginationQuantity + 1; i++) {
			elements.push(
					<li key = {i} data-page = {i}>
						<NavLink to = {`${i}`} activeStyle = {{ color: 'red' }}>{i}</NavLink>
					</li>
				)
		}

		return elements
	}
}

function handleOffset(page) {
	return (page - 1) * 5;
}

function mapStateToProps(state, props) {
	debugger
	return {
		comments: state.comments.getIn(['entities', handleOffset(props.match.params.page)]),
		comentsQuantity: state.comments.quantity,
		loading: state.comments.loading
	}
}

export default connect(mapStateToProps, { loadComments })(CommentsPage)
