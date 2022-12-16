// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

function getDragAfterElement(cards, y) {
  const draggableItems = [...cards.querySelectorAll('[value="toSort"]')]

  return draggableItems.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

export default getDragAfterElement