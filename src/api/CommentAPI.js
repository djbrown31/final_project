const fetchCommentByID = (commentID) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://magic-recipe-finder.herokuapp.com/comments/${commentID}`)
      .then((response) => response.json())
  }
  
  const fetchComments = () => {
    return fetch('https://cors-anywhere.herokuapp.com/https://magic-recipe-finder.herokuapp.com/comments')
      .then((response) => response.json())
  }

  const addComment = (commentObject) => {
    return fetch('https://cors-anywhere.herokuapp.com/https://magic-recipe-finder.herokuapp.com/comments/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(commentObject)
    })
  }






  
  export default {
    fetchCommentByID,
    fetchComments,
    addComment
  }