// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.

const choice = (items) => {
  const idx = Math.floor(Math.random() * (items.length))
  return items[idx]
}

const remove = (items, item) => {
  const idx = items.indexOf(item);
  if (idx > -1) {
    items.splice(idx, 1)
    return items
  }
  return undefined
}

export { choice, remove }