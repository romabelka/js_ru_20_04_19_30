import React, { Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles} />
                <Chart articles = {this.props.articles} />
            </div>
        )
    }
}

export default App