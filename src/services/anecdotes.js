const baseurl = 'http://localhost:5173/anecdotes'

const getAll = async () => {
  return fetch(baseurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
}


export {
  getAll
}
