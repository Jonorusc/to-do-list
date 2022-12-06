import {  Htitle,Card, CardHead, CardBody } from "./styles"
import TodoItem from "./TodoItem"
import React, {  useRef } from "react"


export default function Todo({ tasks, column, setItems, setDescription }) {
  return (
    <Card>
      <CardHead>
        {column.brand !== null ? <img src={column.brand.head} title="Tasks you've already done" alt="Tasks you've already done" /> : null}
        <Htitle>{column.name}</Htitle>
      </CardHead>
      <CardBody>
        {tasks.map((task, i) => {
          return (
            <React.Fragment key={i}>
              <TodoItem task={task} column={column} setItems={setItems} setDescription={setDescription} />
            </React.Fragment>
          )
        })}
      </CardBody>
    </Card>
  )
}
