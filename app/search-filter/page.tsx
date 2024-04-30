"use client"
import React, { useState } from 'react'

function SearchFilter() {
  const [text_value, set_text_value] = useState("")
  const fruits = ["apple", "banana", "grapes", "mango", "water melon", "straw berry"]
  const [items, set_items] = useState(fruits);
  const handleDeleteItem = (item_value: string) => {
    let new_items = [...items];
    new_items = new_items.filter((item) => item !== item_value)
    set_items(new_items)
  }
  const filteredItems = items.filter((item) => item.toLowerCase().includes(text_value.toLowerCase()))
  const handleAddItem = () => {
    set_items([...items, text_value])
    set_text_value("")
  }
  return (
    <div>
      <p>Search filter</p>
      <input type='text' value={text_value} onChange={(event: any) => set_text_value(event.target.value)} />
      <button onClick={handleAddItem} >Add</button>
      {filteredItems.map((item, index) => <div key={index} > {item} <button onClick={() => handleDeleteItem(item)} >delete</button> </div>)}
    </div>
  )
}

export default SearchFilter
