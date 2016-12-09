export default class AjaxFunctions {
  static login(username,password) {
    return fetch('/user/login', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(r => r.json())
  }

  static signup(username, password) {
    return fetch('/user/signup', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(r => r.json())
  }

  static pyGet() {
    return fetch('http://localhost:5000', {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    })
    .then(r => r.json())
  }

  static pyPost() {
    return fetch('http://localhost:5000', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        post:12,
        cors:"hi",
        json:true
      })
    })
    .then(r => r.json())
  }
}
