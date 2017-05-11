import React, { Component } from 'react'
import ArticleList from './ArticleList'
import Chart from './Chart'
import UserForm from './UserForm'

class App extends Component {
    static propTypes = {

    };

    state = {
        counter: 0
    }

    updateCounter = (ev) => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <UserForm />
                <a href = "#" onClick = {this.updateCounter}>update chart</a>
                <ArticleList articles = {this.props.articles} />
                <Chart articles = {this.props.articles} key={this.state.counter}/>
            </div>
        )
    }
}

export default App