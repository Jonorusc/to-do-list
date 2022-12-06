import { Text, CardItem, Indicator, CardArea, CardBtn, CardFlex, FlexIndicator } from "./styles"
import Save from "../medias/svg/save.svg"
import Discard from "../medias/svg/discard.svg"
import Done from "../medias/svg/done.svg"
import React, { useState, useRef } from "react"

export default function TodoItem({ dragging, setDragging, task, column, items, setItems }) {
  const [_task, setTask] = useState(task)
  const [description, setDescription] = useState(task.description)
  const [openStatus, setOpenStatus] = useState(false)
  const dragItemNode = useRef()


  const activeOn = (_) => {
    task = { ..._task, active: !_task.active }
    setTask(task)
  }

  const changeStatusItem = (val) => {
    items.forEach((item, i) => {
      if (item.id === _task.id) {
        // remove from the items and add a new one
        const _items = items
        _items.splice(i, 1)

        setItems([..._items, {..._task, status: val}])
        setOpenStatus(false)
      }
    })
  }

  const onDrag = e => {
    // sort task when dragging
    // dragItemNode.current = e.target

    setDragging({ ...dragging, items: [_task]})
  }

  const onEnd = e => {
    e.preventDefault()
    setDragging({ ...dragging, items: null})
  }
  const dragOver = e => {
    // console.log('over',e)
  }

  return (
    <CardItem active={_task.active} draggable="true" onDragStart={onDrag} onDragEnd={onEnd} onDragOver={dragOver}>
      <CardFlex gap="0.8rem" onDoubleClick={activeOn}>
        {!column.indicator.done ? (
          <Indicator size={column.indicator.size} filled={column.indicator.filled} inprogress={column.indicator.inprogress} onClick={() => setOpenStatus((val) => !val)} />
        ) : (
          <img src={column.indicator.brand} title={column.indicator.msg} alt={column.indicator.msg} onClick={() => setOpenStatus((val) => !val)} />
        )}
        <Text active={_task.active}>{!openStatus ? _task.title : ''}</Text>
        {openStatus ? (
          <FlexIndicator>
            <Indicator title="To do" size="8px" filled="#909090" inprogress={false} onClick={() => changeStatusItem(0)} />
            <Indicator title="In Progress" size="8px" filled="#ffffff" inprogress={true} onClick={() => changeStatusItem(1)} />
            <img src={Done} title="Done" alt="Done" onClick={() => changeStatusItem(2)} />
          </FlexIndicator>
        ) : null}
      </CardFlex>
      {_task.active ? (
        <>
          <CardArea defaultValue={description} onChange={(e) => setDescription(e.target.value)}></CardArea>
          <CardFlex gap="0.5rem" style={{ marginLeft: "16px" }}>
            <CardBtn discard>
              <img src={Discard} alt="Discard changes" />
              <Text>Discard</Text>
            </CardBtn>
            <CardBtn>
              <img src={Save} alt="Save changes" />
              <Text>Save</Text>
            </CardBtn>
          </CardFlex>
        </>
      ) : null}
    </CardItem>
  )
}
