import React, { Component } from 'react'
import CommentAPI from '../api/CommentAPI.js'

class CommentPage extends Component {
  state = {
    comment: {}
  }

  componentDidMount() {
    const id = this.props.match.params.commentID
    CommentAPI.fetchCommentByID(id)
      .then((comment) => this.setState({
        comment: comment
    }))
  }

  render() {
    const comment = this.state.comment
    return (
      <div>
        <h2> Name </h2>
        <p> {comment['author']}</p>
        <h2> Comment </h2>
        <p> {comment['text']}</p>
      </div>
    )
  }
}

export default CommentPage