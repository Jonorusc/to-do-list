import { Body, FlexColumn, Columns, ShadowBox, Htitle, Title, Text } from "./components/styles"
import { $columns, $items } from "./data/data"

import React, { useRef, useState } from "react"
import Todo from "./components/Todo"

import Brand from "./medias/svg/brand.svg"

function App() {
  const [items, setItems] = useState($items)
  const [columns, setColumns] = useState($columns)
  const [description, setDescription] = useState("")
  const columnRef = useRef()
  const [dragging, setDragging] = useState(false)

  const dragStart = e => {
    setDragging(e.target)
  } 

  const onDrag = e => {
    
  }

  const dragEnter = e => {
  }
  
  const dragLeave = e => {
  }

  const targetDragOver = e => {
    e.preventDefault();
  }
  
  const targetDragEnter = e => {
    
  }

  const targetDragLeave = e => {
    e.target.style.transform = "unset"
  }

  const targetDrop = e => {
    e.preventDefault();
    // dragging.parentNode.removeChild(dragging);
    // chamar nova task aqui
    columnRef.current.childNodes.forEach((card) => {
      console.log(card)
     if(e.target.contains(card) || e.target.contains(card.firstElementChild)) {
       console.log('nova task')
        e.target.style.backgroundColor = "#f2f2f245"
     }
    })
    
  }

  return (
    <Body>
      <img src={Brand} title="Brand" alt="Brand" />
      <FlexColumn>
        <Htitle>Room of Thoughts</Htitle>
        <Title>Don't think, throw in the room</Title>
      </FlexColumn>
      <ShadowBox draggable="true" onDrag={onDrag} onDragStart={dragStart} onDragEnter={dragEnter} onDragLeave={dragLeave}>
        <Text>Start dragging this task to create a new one</Text>
      </ShadowBox>
      <Columns ref={columnRef} onDragOver={targetDragOver} onDrop={targetDrop} onDragEnter={targetDragEnter} onDragLeave={targetDragLeave}>
        {columns.map((col, i) => {
          const tasks = (_) => items.filter((item) => item.status === col.id)
          return (
            <Todo
              key={col.id} tasks={tasks()} 
              column={col} 
              setItems={setItems} 
              setDescription={setDescription} 
            />
          )
          
        })}
      </Columns>
    </Body>
  )
}

export default App
