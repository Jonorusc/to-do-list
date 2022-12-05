import { Body, Flex, FlexColumn, Columns, ShadowBox, Htitle, Title, Text, Card, CardHead, CardBody, CardItem, Indicator, CardArea, CardBtn, CardFlex } from "./components/styles"
import Logo from "./medias/svg/logo.svg"
import Todo from "./medias/svg/todo.svg"
import Discard from "./medias/svg/discard.svg"
import Save from "./medias/svg/save.svg"
import Done from "./medias/svg/done.svg"

function App() {
  return (
    <Body>
      <img src={Logo} title="logo" alt="logo" />
      <FlexColumn>
        <Htitle>Room of Thoughts</Htitle>
        <Title>Don't think, throw in the room</Title>
      </FlexColumn>
      <ShadowBox>
        <Text>Start dragging this task to create a new one</Text>
      </ShadowBox>
      <Columns>
        {/* To-do */}
        <Card>
          <CardHead>
            <Htitle>To-do</Htitle>
          </CardHead>
          <CardBody>
            <CardItem active>
              <CardFlex gap="0.8rem">
                <Indicator size="4px" filled="#909090" />
                <Text active>Get the trash out</Text>
              </CardFlex>
              <CardArea></CardArea>
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
            </CardItem>
            <CardItem>
              <CardFlex gap="0.8rem">
                <Indicator size="4px" filled="#909090" />
                <Text>Get the trash out</Text>
              </CardFlex>
            </CardItem>
          </CardBody>
        </Card>
        {/* In Progress */}
        <Card>
          <CardHead>
            <Htitle>In Progress</Htitle>
          </CardHead>
          <CardBody>
            <CardItem>
              <CardFlex gap="0.8rem">
                <Indicator size="8px" filled="#ffffff" inprogress />
                <Text>Get the trash out</Text>
              </CardFlex>
            </CardItem>
          </CardBody>
        </Card>
        {/* Done */}
        <Card>
          <CardHead>
            <img src={Todo} title="Tasks you've already done" alt="Tasks you've already done" />
            <Htitle>Done</Htitle>
          </CardHead>
          <CardBody>
            <CardItem>
              <CardFlex gap="0.8rem">
                <img src={Done} alt="Well done" />
                <Text>Get the trash out</Text>
              </CardFlex>
            </CardItem>
          </CardBody>
        </Card>
      </Columns>
    </Body>
  )
}

export default App
