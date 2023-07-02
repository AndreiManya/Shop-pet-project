import React, { useState } from 'react'
import styles from './styles'

const Item = ({ img, name, type, price }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      style={styles.root}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div style={styles.imgContainer}>
        <img src={require(`../../accets/products/${img}`)} alt="" style={styles.img} />
        {isHover && (
          <button
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#c66')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgba(255,255,255, 0.7)')}
            style={styles.button}
          >
            ADD TO CART
          </button>
        )}
      </div>
      <p style={styles.type}>{type}</p>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>${price}</p>
    </div>
  )
}

export default Item
