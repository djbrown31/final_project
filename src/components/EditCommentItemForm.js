import React from 'react'

const EditCommentItemForm = props => {
  return (
    <form className="col-sm-4">
      <div>
        <div>
          <label className="text-white">Comment:</label>
          <input type="text" name="food" value={props.comment} onChange={ props.handleInputChange}/>
        </div>
        <button onClick={ props.updateCommentItem }> Update </button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </div>
    </form>
  )
}

export default EditCommentItemForm;