import { useState } from "react";
import ListItens from './components/ListItens'

const ListItemSingle = () => {
  const [list, setList] = useState(['Rodrigo Nogueira']);
  const [item, setItem] = useState('');

  const handleChange =(e) => {
    setItem(e.target.value)
  }

  const handleAdd = () => {
    setList([...list, item])
  }

  return (
    <>
    <input
      type={text}
      value={item}
      onChange={handleChange}
    />
    <button onClick={handleAdd}>Add</button>
    <ListItens list={list}/>
    </>
  )
}

export default ListItemSingle