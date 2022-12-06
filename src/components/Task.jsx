import { NewTask, Text, CardBtn, CardArea, CardFlex } from "./styles"
import Save from "../medias/svg/save.svg"
import Discard from "../medias/svg/discard.svg"
import Done from "../medias/svg/done.svg"

import React, { useState, useRef } from "react"

export default function Task({ items, setItems, column, setNewTask }) {
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const titleRef = useRef()
  const descriptionRef = useRef()
  
  const createTask = _ => {
    if(description.length < 7) {
      setDescription('')
      descriptionRef.current.placeholder = "You must to enter atleast 7 characters"
    } else if (title.length < 7) {
      setTitle('')
      titleRef.current.placeholder = "You must to enter atleast 7 characters"
    } else {
      setItems([...items, {
        status: column.id,
        active: false,
        title,
        description,
      }])
      console.log(items)
    }
  }
  
  return (
    <NewTask>
      <CardFlex>
        <img src={Done} alt="" />
        <input 
          required
          ref={titleRef}
          type="text" 
          placeholder="Enter a title"
          value={title}
          onChange={(e) => (setTitle(e.target.value))}
        />
      </CardFlex>
      <CardArea required ref={descriptionRef} defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
      <CardFlex gap="0.5rem" style={{ marginLeft: "16px" }}>
        <CardBtn discard onClick={() => setNewTask(false)}>
          <img src={Discard} alt="Discard changes" />
          <Text>Cancel</Text>
        </CardBtn>
        <CardBtn onClick={createTask}>
          <img src={Save} alt="Save changes" />
          <Text>Save</Text>
        </CardBtn>
      </CardFlex>
    </NewTask>
  )
}
