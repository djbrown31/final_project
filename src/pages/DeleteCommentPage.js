import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import CommentAPI from '../api/CommentAPI.js'
import { Redirect } from 'react-router'

class DeleteCommentPage extends Component {
    state = {
        redirect: false
      }
      
      handleDelete(event){
        event.preventDefault()
        const commentObject = {
          author: event.target.elements[0].value,
          text: event.target.elements[1].value,
        }
        CommentAPI.deleteComment(commentObject)
          .then((_response) => { this.setState({ redirect: true }) })
      }
    
      render() {
        const { redirect } = this.state
        if (redirect) {
          return <Redirect to = "/" />
        }
        
        return (
          <div>
            <Form onDelete={this.handleDelete.bind(this)}>
              <Form.Group controlId="author">
                <Form.Label>Name</Form.Label>
                <Form.Control/>
              </Form.Group>
    
              <Button variant="primary" type="delete">
                Delete
              </Button>
            </Form>
          </div>
        )
      }
    }

export default DeleteCommentPage
