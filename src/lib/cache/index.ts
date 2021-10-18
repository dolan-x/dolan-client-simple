import LRU from 'lru-cache'

const cache = new LRU<PropertyKey, any>({
  maxAge: 24 * 60 * 60 * 1000 // One Day
})

export default cache
