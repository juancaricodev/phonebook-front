import axios from 'axios'

const URL = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(URL)
  return request.then(res => res.data)
}

const create = (newObject) => {
  const request = axios.post(URL, newObject)
  return request.then(res => res.data)
}

const updateNumber = (id, newObject) => {
  const url = `${URL}/${id}`
  const request = axios.put(url, newObject)
  return request.then(res => res.data)
}

const deleteId = (id, newObject) => {
  const url = `${URL}/${id}`
  const request = axios.put(url, newObject)
  return request.then(res => res.data)
}

export default { getAll, create, updateNumber, deleteId }
