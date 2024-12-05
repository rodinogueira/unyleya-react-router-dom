import { useState } from "react";
import ListItens from './components/ListItens'

const FormAddToList = () => {
  const [list, setList] = useState([]);
  const [items, setItens] = useState({
    name: '',
    lastName: '',
    age: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setItens(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAdd = () => {
    setList([...list, {name: items.name, lastName: items.lastName, age: items.age}]);
  }

  return (
    <>
      <input
        type="text"
        name="name"
        value={items.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={items.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={items.age}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <ListItens list={list}/>
    </>
  )
}

export default FormAddToList
