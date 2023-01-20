function choice (items) {
  const randomIndex = Math.random() * items.length
  return items[randomIndex]
}

function remove(items, item) {
  const index = items.findIndex(e => e === item)
  items.splice(index, 1)
}

export {
  choice,
  remove
}