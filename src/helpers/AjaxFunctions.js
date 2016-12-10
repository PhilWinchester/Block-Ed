function mapElections(eData) {
  const elections = Object.keys(eData)
    .map((eId) => (
      eData[eId]
    ))
  return elections
}

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

  static pyVote(vote) {
    return fetch('http://localhost:5000/vote', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(vote)
    })
    .then(r => r.json())
  }

  static pyGetElect() {
    return fetch('http://localhost:5000/elections', {
      method: 'GET',
      mode: 'cors',
      dataType:'json'
    })
    .then(r => r.json())
    .then(eData => mapElections(eData))
  }

  static pyPostElect(elect) {
    return fetch('http://localhost:5000/elections', {
      headers: {
        'Content-Type':'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(elect)
    })
    .then(r => r.json())
    .then(eData => mapElections(eData))
  }
}
