import React, {Component} from 'react'

export default (OriginalComponent) => class AccordionComponent extends Component {
	state = {
		openItemId: null
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleArticle={this.toggleArticle}/>
	}

	toggleArticle = id => event => {
		let openItemId;
		
		if (this.state.openItemId === id) {
			openItemId = null;
		} else {
			openItemId = id;
		}

		this.setState({
			openItemId: openItemId
		})
	}
}