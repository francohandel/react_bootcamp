function choice (items) {
  console.log(items.length)
  const randomIndex = Math.floor(Math.random() * items.length)
  console.log(randomIndex, items[randomIndex])
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