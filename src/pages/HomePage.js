import React, { Component } from 'react'
import CommentAPI from '../api/CommentAPI'
import CommentList from '../components/CommentList'
import Checkbox from '../components/Checkbox'

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
        <label>
        <h1> Recipe Comments </h1>
        <CommentList comments={this.state.comments} Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}/>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span>Label Text</span>
        </label>
      </div>
    )
  }
}

export default HomePage