import { useEffect, useState } from 'react'
import axios from 'axios'
import Items from './Items'
import Loading from './Loading'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => fetchItems(), [])

  const fetchItems = async () => {
    setIsLoading(true)
    const result = await axios('https://course-api.com/react-tours-project')
    setItems(result.data)
    setIsLoading(false)
  }

  const removeItem = id => {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
  }

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (!items.length) {
    return (
      <main>
        <div className="title">
          <h1>No more items</h1>
          <button className="btn" onClick={() => fetchItems()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Items items={items} removeItem={removeItem} />
    </main>
  )
}

export default App
