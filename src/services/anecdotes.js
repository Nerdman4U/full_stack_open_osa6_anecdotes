import { asObject } from "../reducers/anecdoteReducer"

const baseurl = 'http://localhost:5173/anecdotes'

const getAll = async () => {
  return fetch(baseurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
}

const create = async (anecdote) => {
  const obj = asObject(anecdote)
  return fetch(baseurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => res.json())
}

// const modify = async (obj) => {
//   return fetch(`${baseurl}/${obj.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(obj)
//   }).then(res => res.json())
// }

export {
  getAll,
  create
}
