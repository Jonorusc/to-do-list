import { Body, FlexColumn, Columns, ShadowBox, Htitle, Title, Text } from "./components/styles"
import { $columns, $items } from "./data/data"

import React, { useEffect, useState } from "react"
import Todo from "./components/Todo"
import Task from "./components/Task"

import Brand from "./medias/svg/brand.svg"

function App() {
  const columns = $columns;
  const [items, setItems] = useState($items)
  const [drag, setDrag] = useState({ target: null, params: null })
  const [newTask, setNewTask] = useState(false)

  // remove default pattern
  const targetDragOver = e =>  e.preventDefault()
  const targetDrop = e => e.preventDefault()

  // I'm taking the data from Todo.jsx, if there was a drop event on one of the cards
  useEffect(() => {
    if(drag.target !== null) setNewTask(true)
  }, [drag])

  return (
    <Body>
      <img src={Brand} title="Brand" alt="Brand" />
      <FlexColumn>
        <Htitle>Room of Thoughts</Htitle>
        <Title>Don't think, throw in the room</Title>
      </FlexColumn>
      <ShadowBox draggable="true" >
        <Text>Start dragging this task to create a new one</Text>
      </ShadowBox>
      <Columns onDragOver={targetDragOver} onDrop={targetDrop}>
        {columns.map((col, i) => {
          const tasks = (_) => items.filter((item) => item.status === col.id)
          return (
            <Todo
              setDrag={setDrag}
              key={col.id} tasks={tasks()} 
              column={col} 
              items={items}
              setItems={setItems} 
            />
          )
          
        })}
      </Columns>
      {newTask 
      ? <Task 
        items={items}
        setItems={setItems} 
        column={drag.target}
        setNewTask={setNewTask}
      /> 
      : null}
    </Body>
  )
}

export default App
