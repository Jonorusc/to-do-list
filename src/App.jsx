import * as S from "./components/styles"
import { $columns, $items } from "./data/data"
import React from "react"
import Brand from "./medias/svg/brand.svg"
import Discard from "./medias/svg/discard.svg"
import Save from "./medias/svg/save.svg"
import Done from "./medias/svg/done.svg"

function App() {
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
        <S.Card>
          <S.CardHead>
            <S.Htitle>To-do</S.Htitle>
          </S.CardHead>
          <S.CardBody>
            <S.CardItem active={true}>
              <S.CardFlex gap="0.8rem">
                <S.Indicator size="4px" filled="#909090" inprogress={false} />
                <S.Text active={true}>Item</S.Text>
              </S.CardFlex>
              <S.CardArea></S.CardArea>
              <S.CardFlex gap="0.5rem">
                <S.CardBtn discard>
                  <img src={Discard} alt="Discard changes" />
                  <S.Text>Discard</S.Text>
                </S.CardBtn>
                <S.CardBtn>
                  <img src={Save} alt="Save changes" />
                  <S.Text>Save</S.Text>
                </S.CardBtn>
              </S.CardFlex>
            </S.CardItem>
          </S.CardBody>
        </S.Card>
        <S.Card>
          <S.CardHead>
            <S.Htitle>In Progress</S.Htitle>
          </S.CardHead>
          <S.CardBody></S.CardBody>
        </S.Card>
        <S.Card>
          <S.CardHead>
            <img src={Done} title="Tasks you've already done" alt="Tasks you've already done" />
            <S.Htitle>Done</S.Htitle>
          </S.CardHead>
          <S.CardBody></S.CardBody>
        </S.Card>
      </S.Columns>
    </S.Body>
  )
}

export default App
