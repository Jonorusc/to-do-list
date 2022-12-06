import { Htitle, Card, CardHead, CardBody } from "./styles"
import TodoItem from "./TodoItem"
import React, { useRef, useState } from "react"

export default function Todo({ setDragging, dragging, setAction, tasks, column, items, setItems}) {  
  const cardRef = useRef()
  const onDrop = (e) => {
    e.preventDefault()
    
    let temp = dragging.items 
    temp?.push(column)
    
    setAction({ 
      target: dragging.items !== null ? temp : column
    })
    removeAnimation(e)
  }

  const dropEnter = (e) => {
    if (e.target === cardRef.current) {
      cardRef.current.style.transform = "rotate(1.2deg)"
      cardRef.current.style.backgroundColor = "#f2f2f220"
    }
  }

  const dropLeave = (e) => removeAnimation(e)

  const removeAnimation = e => {
    if (e.target === cardRef.current) {
      cardRef.current.style.transform = "unset"
      cardRef.current.style.backgroundColor = "white"
    }
  }
 
  return (
    <Card ref={cardRef} onDrop={onDrop} onDragEnter={dropEnter} onDragLeave={dropLeave}>
      <CardHead>
        {column.brand !== null ? <img src={column.brand.head} title="Tasks you've already done" alt="Tasks you've already done" /> : null}
        <Htitle>{column.name}</Htitle>
      </CardHead>
      <CardBody>
        {tasks.map((task, i) => {
          return (
            <React.Fragment key={i}>
              <TodoItem 
                dragging={dragging}
                setDragging={setDragging}
                task={task} 
                column={column} items={items} 
                setItems={setItems} 
              />
            </React.Fragment>
          )
        })}
      </CardBody>
    </Card>
  )
}
