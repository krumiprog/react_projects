import React from 'react'
import Item from './Item'

const Items = ({ items, removeItem }) => {
  return (
    <div className="items">
      {items.map(item => (
        <Item key={item.id} {...item} removeItem={removeItem} />
      ))}
    </div>
  )
}

export default Items
