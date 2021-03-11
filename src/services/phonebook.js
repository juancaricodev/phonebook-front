const URL = 'http://localhost:5000/persons'

const getAll = () => {
  const request = fetch.get(URL)
  const data = request.then(res => res.json())

  return data.then(res => res.data)
}

const create = (newObject) => {
  const request = fetch.post(URL, newObject)
  const data = request.then(res => res.json())

  return data.then(res => res.data)
}

const updateNumber = (id, newObject) => {
  const url = `${URL}/${id}`
  const request = fetch.put(url, newObject)
  const data = request.then(res => res.json())

  return data.then(res => res.data)
}

const deleteId = (id, newObject) => {
  const url = `${URL}/${id}`
  const request = fetch.put(url, newObject)
  const data = request.then(res => res.json())

  return data.then(res => res.data)
}

export default { getAll, create, updateNumber, deleteId }
