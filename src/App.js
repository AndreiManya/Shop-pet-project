import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Item from './components/item'
import img from './accets/products/product-1-1.jpg'

const styles = {
  root: {
    width: '100%',
    height: '100%',
    color: 'red',
  },
  list: {
    width: '100%',
    maxWidth: '1200px',
    margin: 'auto',
    padding: '50px 0',
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '20px',
    rowGap: '20px',
  },
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://64a1a4d30079ce56e2db4901.mockapi.io/items')
      .then((e) => e.json())
      .then((e) => setData(e))
    setLoading(false)
  }, [])
  return (
    <div style={styles.root}>
      <Header />
      <main style={styles.list}>
        {data?.map((e) => (
          <Item img={e.img} type={e.type} name={e.name} price={e.price} />
        ))}
      </main>
    </div>
  )
}

export default App
