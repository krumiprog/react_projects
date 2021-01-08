import React from 'react'

const Item = ({ id, image, info, name, removeItem }) => {
  return (
    <div className="item">
      <div className="item-inner">
        <div className="item-front">
          <h3>{name}</h3>
          <img src={image} alt={name} />
        </div>
        <div className="item-back">
          <p>{info}</p>
          <button className="btn-delete" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
