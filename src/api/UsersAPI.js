const login = (credentialsObject) => {
    let response = fetch('http://localhost:3000/api/v1/rest-auth/registration/', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(credentialsObject)
    })
    if (response.status == 401) {
      return null
    }
    else {
      return response
    }
  }
  
  
  
  
  export default {
    login: login
  }