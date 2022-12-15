import Todo from "../medias/svg/todo.svg"
import Done from "../medias/svg/done.svg"

export const $columns = [
  {
    id: 0,
    name: 'To-do',
    brand: null,
    indicator: {
      size: '4px',
      filled: '#909090',
      brand: null,
      inprogress: false,
      done: false,
    },
    items: [0]
  },
  {
    id: 1,
    name: 'In Progress',
    brand: null,
    indicator: {
      size: '8px',
      filled: '#ffffff',
      brand: null,
      inprogress: true,
      done: false,
    },
    items: [1]
  },
  {
    id: 2,
    name: 'Done',
    brand: {
      head: Todo,
      item: 'Done',
      msg: "Tasks you've already done",
    }, 
    indicator: {
      size: '',
      filled: '',
      brand: Done,
      inprogress: false,
      done: true,
    },
    items: [2]
  }
]

export const $items = [
  {
    id: 0,
    title: 'Get the trash out',
    description: 'im going',
  },
  {
    id: 1,
    title: 'Bathe the dog',
    description: 'My dog is crazy!',
  },
  {
    id: 2,
    title: 'Pay my rent',
    description: 'The best day',
  },
]
