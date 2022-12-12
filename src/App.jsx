import { Body, FlexColumn, Columns, ShadowBox, Htitle, Title, Text } from "./components/styles"
import { $columns, $items } from "./data/data"
import changeStatusItem from "./helpers/changeStatusItem"
import React, { useEffect, useState, useRef } from "react"
import Todo from "./components/Todo"
import Task from "./components/Task"
import Brand from "./medias/svg/brand.svg"


function App() {
  const [items, setItems] = useState($items)
  const [dragging, setDragging] = useState({ task: false, items: null })
  const [action, setAction] = useState({ target: null })
  const [newTask, setNewTask] = useState(false)
  const newTaskRef = useRef()

  // remove default pattern
  const targetDragOver = (e) => e.preventDefault()
  const targetDrop = (e) => e.preventDefault()

  const onDrag = (e) => {
    setDragging({ ...dragging, task: true })
  }
  const onEnd = (e) => {
    e.preventDefault()
    setDragging({ ...dragging, task: false })
  }

  // I'm taking the data from Todo.jsx, if there was a drop event on one of the cards
  useEffect(() => {
    if (action.target !== null) {
      switch (dragging.task) {
        case false:
          const [task, column] = action.target
          
          const updateTask = changeStatusItem(column.id, items, task)
          setItems(updateTask)
          break
        case true:
          setNewTask(true)
          break
        default:
          break
      }
    }
    // eslint-disable-next-line
  }, [action])

  return (
    <Body>
      <img src={Brand} title="Brand" alt="Brand" />
      <FlexColumn>
        <Htitle>Room of Thoughts</Htitle>
        <Title>Don't think, throw in the room</Title>
      </FlexColumn>
      <ShadowBox draggable="true" ref={newTaskRef} onDragStart={onDrag} onDragEnd={onEnd}>
        <Text>Start dragging this task to create a new one</Text>
      </ShadowBox>
      <Columns onDragOver={targetDragOver} onDrop={targetDrop}>
        {$columns.map((col, i) => {
          const tasks = (_) => items.filter((item) => item.status === col.id)
          return <Todo setDragging={setDragging} dragging={dragging} setAction={setAction} key={col.id} tasks={tasks()} column={col} items={items} setItems={setItems} />
        })}
      </Columns>
      {newTask ? <Task items={items} setItems={setItems} column={action.target} setNewTask={setNewTask} /> : null}
    </Body>
  )
}

export default App
