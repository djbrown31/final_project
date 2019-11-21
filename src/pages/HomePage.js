import React, { Component } from 'react'
import CommentAPI from '../api/CommentAPI'
import CommentList from '../components/CommentList'

class HomePage extends Component {
    state = {
        comments: []
      }
    
      componentDidMount(){
        CommentAPI.fetchComments()
          .then((apiResponseJSON) => {
            this.setState({
              comments: apiResponseJSON
            })
          }
        )
      }

  render() {
    return (
      <div>
        <h1> All Comments </h1>
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default HomePage