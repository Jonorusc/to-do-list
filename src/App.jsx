import * as S from "./components/styles"

import { $columns, $items } from "./data/data"

import Brand from "./medias/svg/brand.svg"
import Discard from "./medias/svg/discard.svg"
import Save from "./medias/svg/save.svg"
import Done from "./medias/svg/done.svg"

import React, { useState } from "react"

const Item = ({ item, column }) => {
  const [openIndicator, setOpenIndicator] = useState(false)
  const [description, setDescription] = useState(item.description)

  return (
    <S.CardItem active={item.active}>
      <S.CardFlex gap="0.8rem">
        {!column.indicator.done ? (
          <S.Indicator size={column.indicator.size} filled={column.indicator.filled} inprogress={column.indicator.inprogress} onClick={() => setOpenIndicator((val) => !val)}/>
        ) : (
          <img src={column.indicator.brand} title={column.indicator.msg} alt={column.indicator.msg} onClick={() => setOpenIndicator((val) => !val)}/>
        )}
        <S.Text active={item.active}>{!openIndicator ? item.title : ''}</S.Text>
        {openIndicator ? (
          <S.FlexIndicator>
            <S.Indicator title="To do" size="8px" filled="#909090" inprogress={false}/>
            <S.Indicator title="In Progress" size="8px" filled="#ffffff" inprogress={true}/>
            <img src={Done} title="Done" alt="Done"/>
          </S.FlexIndicator>
        ) : null}
      </S.CardFlex>
      {item.active ? (
        <>
          <S.CardArea defaultValue={description} onChange={(e) => setDescription(e.target.value)}></S.CardArea>
          <S.CardFlex gap="0.5rem" >
            <S.CardBtn discard>
              <img src={Discard} alt="Discard changes" />
              <S.Text>Discard</S.Text>
            </S.CardBtn>
            <S.CardBtn>
              <img src={Save} alt="Save changes" />
              <S.Text>Save</S.Text>
            </S.CardBtn>
          </S.CardFlex>
        </>
      ) : null}
    </S.CardItem>
  )
}

function App() {
  const [items, setItems] = useState($items)

  return (
    <S.Body>
      <img src={Brand} title="Brand" alt="Brand" />
      <S.FlexColumn>
        <S.Htitle>Room of Thoughts</S.Htitle>
        <S.Title>Don't think, throw in the room</S.Title>
      </S.FlexColumn>
      <S.ShadowBox>
        <S.Text>Start dragging this task to create a new one</S.Text>
      </S.ShadowBox>
      <S.Columns>
        {$columns.map((column, index) => {
          const _items = items.filter((item) => column.items.indexOf(item.id) > -1)
          return (
            <React.Fragment key={index}>
              <S.Card>
                <S.CardHead>
                  {column.brand ? <img src={column.brand.head} title={column.brand.msg} alt={column.brand.msg} /> : null}
                  <S.Htitle>{column.name}</S.Htitle>
                </S.CardHead>
                <S.CardBody>
                  {_items.map((item, key) => {
                    return <Item item={item} column={column} key={key}/>
                  })}
                </S.CardBody>
              </S.Card>
            </React.Fragment>
          )
        })}
      </S.Columns>
    </S.Body>
  )
}

export default App
