/*import React from 'react'

const MenuRandom = ({ menu, onDeleteMenu }) => {
  const handleDelete = () => onDeleteMenu(menu.id)

  return (
    <div className="card mb-4">
      <img src={menu.id} className="card-img-top" alt="post" />

      <div className="card-body">
        <h5 className="card-title">{menu.lunes.lunch}</h5>
        <p className="card-text">{menu.lunes.dinner}</p>

        <p>
          {menu.id.map((h, i) => (
            <strong key={i} className="mr-1">{h}</strong>
          ))}
        </p>

        <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
      </div>

    </div>
  )
}

export default MenuRandom */