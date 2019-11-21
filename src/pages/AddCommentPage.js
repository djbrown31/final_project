import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import CommentAPI from '../api/CommentAPI.js'
import { Redirect } from 'react-router'

class AddCommentPage extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault()
    const commentObject = {
      author: event.target.elements[0].value,
      text: event.target.elements[1].value,
    }
    CommentAPI.addComment(commentObject)
      .then((_response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="author">
            <Form.Label>Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>Comment</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default AddCommentPage