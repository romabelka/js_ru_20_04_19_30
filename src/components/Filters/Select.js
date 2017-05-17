import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticles } from '../../AC/index'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selection: null
    }

    render() {
        const options = this.props.filters.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options = {options} value = {this.state.selection}
                    onChange = {this.handleSelectionChange}
                    multi = {true} />
        )
    }

    handleSelectionChange = selection => {
        const { filterArticles, articles, filters } = this.props
        const ids = selection.map(obj => obj.value)
        const options = {
            ids
        }

        filterArticles(options)
        this.setState({ selection })

    }
}

function mapStateToProps(storeState) {
    return {
        filters: storeState.articlesData.filters
    }
}

export default connect(mapStateToProps, { filterArticles })(SelectFilter)
