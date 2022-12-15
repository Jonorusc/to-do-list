import * as S from "./components/styles"
import useClickOutside from "./helpers/clickOutSide"

import { $columns, $items } from "./data/data"

import Brand from "./medias/svg/brand.svg"
import Discard from "./medias/svg/discard.svg"
import Save from "./medias/svg/save.svg"
import Done from "./medias/svg/done.svg"

import React, { useState, useRef } from "react"

function App() {
  const [items, setItems] = useState($items)
  const [columns, setColumns] = useState($columns)
  const [dragging, setDragging] = useState({ target: undefined, columnId: undefined }) // undefined | String
  const [newTask, setNewTask] = useState(false)

  // component
  const Item = ({ item, column }) => {
    const [openIndicator, setOpenIndicator] = useState(false)
    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description)
    const [active, setActive] = useState(false)
    const [error, setError] = useState('')
    const itemRef = useRef()

    const changeItemState = () => setActive((val) => !val)

    const setItemColumn = (columnId) => {
      if (column.id === columnId) return

      let _columns = [...columns]

      // removing item from the column
      const itemIndex = _columns[column.id].items.indexOf(item.id)
      _columns[column.id].items.splice(itemIndex, 1)

      // replacing item to the column whose columndId belongs to
      _columns[columnId].items.push(item.id)

      // reorganise the global state
      setColumns(_columns)
    }

    const saveTask = () => {
      const _items = [...items]
      const itemId = item.id 
      
      // let _item = _items.filter(i => i.id === itemId)[0]
      let _item = _items.findIndex((val) => val.id === itemId)

      if(title.length < 4) {
        setError('title')
      } else if (description.length < 4) {
        setError('desc')
      } else { 
        setError('')
        _items[_item] = {
          ...item,
          title,
          description
        }
        setItems(_items)
      }
    }

    useClickOutside(itemRef, () => (active ? changeItemState() : null))
    useClickOutside(itemRef, () => (active ? setError('') : null))
    useClickOutside(itemRef, () => (openIndicator ? setOpenIndicator((val) => !val) : null))

    return (
      <S.CardItem active={active} ref={itemRef}>
        <S.Error active={(error === 'title' && active) ? true : false} top="10px" right="10px">Please fill in the title</S.Error>
        <S.Error active={(error === 'desc' && active) ? true : false} top="60px" right="10px">Please fill in the description</S.Error>
        <S.CardFlex gap="0.8rem" onDoubleClick={changeItemState}>
          {!column.indicator.done ? (
            <S.Indicator size={column.indicator.size} filled={column.indicator.filled} inprogress={column.indicator.inprogress} onClick={() => setOpenIndicator((val) => !val)} />
          ) : (
            <img src={column.indicator.brand} title={column.indicator.msg} alt={column.indicator.msg} onClick={() => setOpenIndicator((val) => !val)} />
          )}
          {active 
          ? <S.Input value={title} onChange={(e) => setTitle(e.target.value)} />
          : <S.Text active={active}>{!openIndicator ? item.title : ""}</S.Text>}
          {openIndicator ? (
            <S.FlexIndicator>
              <S.Indicator title="To do" size="8px" filled="#909090" inprogress={false} onClick={() => setItemColumn(0)} />
              <S.Indicator title="In Progress" size="8px" filled="#ffffff" inprogress={true} onClick={() => setItemColumn(1)} />
              <img src={Done} title="Done" alt="Done" onClick={() => setItemColumn(2)} />
            </S.FlexIndicator>
          ) : null}
        </S.CardFlex>
        {active ? (
          <>
            <S.CardArea defaultValue={description} onChange={(e) => setDescription(e.target.value)}></S.CardArea>
            <S.CardFlex gap="0.5rem">
              <S.CardBtn discard onClick={() => setActive((val) => !val)}>
                <img src={Discard} alt="Discard changes" />
                <S.Text>Discard</S.Text>
              </S.CardBtn>
              <S.CardBtn onClick={saveTask}>
                <img src={Save} alt="Save changes" />
                <S.Text>Save</S.Text>
              </S.CardBtn>
            </S.CardFlex>
          </>
        ) : null}
      </S.CardItem>
    )
  }

  const NewTask = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState('')
    const taskRef = useRef()

    useClickOutside(taskRef, () => {
      setNewTask(false)
      setError('')
      setDragging({ target: undefined, columnId: undefined })
    })

    const createTask = () => {
      setDragging({ target: undefined, columnId: undefined })
      if(title.length < 4) {
        setError('title')
      } else if (description.length < 4) {
        setError('desc')
      } else {
        setError('')
        // create a new task
        let _items = [...items]
        const itemId = _items.length
        _items.push({
          id: itemId,
          title,
          description
        })
        // link task in the chosen column
        const columnId = dragging.columnId
        let _columns = [...columns]
        _columns[columnId].items.push(itemId)

        setItems(_items)
        setColumns(_columns)
        setNewTask(false)
      }
    }

    return (
      <S.NewTask ref={taskRef}>
        <S.Error active={error === 'title' ? true : false} top="10px" right="-150px">Please fill in the title</S.Error>
        <S.Error active={error === 'desc' ? true : false}>Please fill in the description</S.Error>
        <S.CardFlex>
          <img src={Done} alt="" />
          <S.Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </S.CardFlex>
        <S.CardArea defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
        <S.CardFlex gap="0.5rem" style={{ marginLeft: "16px" }}>
          <S.CardBtn discard 
            onClick={() => {
              setNewTask(false) 
              setDragging({ target: undefined, columnId: undefined })
              setError('')
            }}
          >
            <img src={Discard} alt="Discard changes" />
            <S.Text>Cancel</S.Text>
          </S.CardBtn>
          <S.CardBtn onClick={createTask}>
            <img src={Save} alt="Save changes" />
            <S.Text>Save</S.Text>
          </S.CardBtn>
        </S.CardFlex>
      </S.NewTask>
    )
  }

  // functions
  const setAnimations = (target, animate = true) => {
    if (target.getAttribute('value') === 'Card') {
      if (animate) {
        target.style.transform = "translateY(-15px) rotate(1.2deg)"
        target.style.backgroundColor = "#f2f2f240"
      } else {
        target.style.transform = "unset"
        target.style.backgroundColor = "white"
      }
    }
  }

  const columnDragOver = (e, column) => {
    e.preventDefault()
    if(dragging.target === 'Task') {
      setAnimations(e.target)
      setDragging({...dragging, columnId: column.id})
    }
    
  }

  const columnDragLeave = (e, column) => {
    e.preventDefault()
    if(dragging.target === 'Task') setAnimations(e.target, false)
  }

  const columnDragDrop = (e, column) => {
    e.preventDefault()
    if(dragging.target === 'Task') setAnimations(e.target, false)

    if (dragging.target === undefined || dragging.columnId === undefined) return

    // check if it is to create a new task or add an item

    switch (dragging.target) {
      case "Task":
        setNewTask(true)
        break
      case "Item":
        break
      default:
        break
    }
  }

  return (
    <S.Body>
      <img src={Brand} title="Brand" alt="Brand" />
      <S.FlexColumn>
        <S.Htitle>Room of Thoughts</S.Htitle>
        <S.Title>Don't think, throw in the room</S.Title>
      </S.FlexColumn>
      <S.ShadowBox draggable={true} onDrag={() => setDragging({ ...dragging, target: "Task" })}>
        <S.Text>Start dragging this task to create a new one</S.Text>
      </S.ShadowBox>
      <S.Columns>
        {columns.map((column, index) => {
          const _items = items.filter((item) => column.items.indexOf(item.id) > -1)
          return (
            <React.Fragment key={index}>
              <S.Card value="Card" onDragOver={(e) => columnDragOver(e, column)} onDragLeave={(e) => columnDragLeave(e, column)} onDrop={(e) => columnDragDrop(e, column)}>
                <S.CardHead>
                  {column.brand ? <img src={column.brand.head} title={column.brand.msg} alt={column.brand.msg} /> : null}
                  <S.Htitle>{column.name}</S.Htitle>
                </S.CardHead>
                <S.CardBody>
                  {_items.map((item, key) => {
                    return <Item item={item} column={column} key={key} />
                  })}
                </S.CardBody>
              </S.Card>
            </React.Fragment>
          )
        })}
      </S.Columns>
      {newTask ? <NewTask /> : null}
    </S.Body>
  )
}

export default App
