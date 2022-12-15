/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// example
function App() {
  return (
    <>
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
    </>
  )
}
