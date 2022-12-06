import { Text, CardItem, Indicator, CardArea, CardBtn, CardFlex } from "./styles"
import React from "react"
import Save from "../medias/svg/save.svg"
import Discard from "../medias/svg/discard.svg"

export default function TodoItem({ task, column, setItems, setDescription }) {
  return (
    <CardItem active={task.active}>
      <CardFlex gap="0.8rem">
        {!column.indicator.done ? (
          <Indicator size={column.indicator.size} filled={column.indicator.filled} inprogress={column.indicator.inprogress} />
        ) : (
          <img src={column.indicator.brand} title={column.indicator.msg} alt={column.indicator.msg} />
        )}
        <Text active={task.active}>{task.title}</Text>
      </CardFlex>
      {task.active ? (
        <>
          <CardArea defaultValue={task.description} onChange={(e) => setDescription(e.target.value)}></CardArea>
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
