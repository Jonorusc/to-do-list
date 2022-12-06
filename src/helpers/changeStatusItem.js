function changeStatusItem(val, items, task) {
  let result
  items.forEach((item, i) => {
    if (item.id === task.id) {
      // remove from the items and add a new one
      const _items = items
      _items.splice(i, 1)
      
      result = [..._items, {...task, status: val}]
    }
  })
  return result
}

export default changeStatusItem