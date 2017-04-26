import React, {Component} from 'react'

export default class Article extends Component {

    state = {
        isOpen: false,
        title: this.props.article.title
    }

    render() {
        const {article} = this.props
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {this.state.isOpen ? 'New Title': this.state.title  }
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


