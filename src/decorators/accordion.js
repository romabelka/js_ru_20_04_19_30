import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
	state = {
		openArticleId: null
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleArticle={this.toggleArticle}/>
	}

	toggleArticle = id => event => {
		let openArticleId;
		
		if (this.state.openArticleId === id) {
			openArticleId = null;
		} else {
			openArticleId = id;
		}

		this.setState({
			openArticleId: openArticleId
		})
	}
}