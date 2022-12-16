import styled from "styled-components"

// Text and Boxes
export const Body = styled.section`
  background: radial-gradient(117.04% 95.93% at 50% 0%, #fbfbfb 0%, #e8e8e8 100%);
  height: 100%;
  min-height: 100vh;
  width: 100%;
  /* flexbox */
  display: flex;
  flex-direction: column;
  row-gap: 1.7rem;
  align-items: center;
  /* container */
  max-width: 1512px;
  margin-left: auto;
  margin-right: auto;
  padding: 1.6rem 0;
  box-sizing: border-box;
  position: relative;
  &img {
    width: 108px;
    height: 112px;
  }
`

export const Flex = styled.div`
  display: flex;
  column-gap: ${(props) => (props.gap ? props.gap : "0.2rem")};
  align-items: center;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
  align-items: center;
`

// highlighted title
export const Htitle = styled.span`
  color: #212121;
  display: block;
  font-size: 36px;
  font-weight: 500;
`

export const Title = styled(Htitle)`
  font-size: 20px;
  font-weight: 400;
  font-family: "Untitled Sans", Helvetica, Sans-Serif;
`

export const Text = styled.span`
  color: #212121;
  font-size: ${(props) => (props.active ? "20px" : "16px")};
  font-weight: ${(props) => (props.active ? "500" : "400")};
  line-height: 22px;
  min-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 55px;
    height: 2px;
    background-color: #212121;
    display: ${(props) => (props.active ? "block" : "none")};
  }
`

export const ShadowBox = styled.div`
  background: radial-gradient(105.97% 2950.96% at 103.57% 236.47%, #f1f1f1 0%, #f3f3f3 0.01%);
  box-shadow: 0px 45px 80px rgba(0, 0, 0, 0.07), 0px 18.7999px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 10.0513px 17.869px rgba(0, 0, 0, 0.0417275), 0px 5.6347px 10.0172px rgba(0, 0, 0, 0.035),
    0px 2.99255px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 1.24527px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 8px;
  padding: 8px 16px 8px 12px;
  border: 3px solid #cacaca;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  text-indent: 23px;
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #909090;
    position: absolute;
    left: 15px;
    transform: translateY(50%);
    transition: all 0.2s;
  }
  &:active {
    border: 1px solid #cacaca;
    transform: rotate(-1deg);
    margin-bottom: 0.25rem;
    &::after {
      content: "";
      width: 2px;
      height: 2px;
      background-color: #909090;
      border-radius: 50%;
      transform: translate(50%, calc(4px + 100%));
    }
  }
`

// Grid Columns
export const Columns = styled.div`
  margin: 0 90px;
  width: calc(100% - 180px);
  display: flex;
  justify-content: center;
  column-gap: 64px;
  z-index: 999;
  box-sizing: border-box;
`

// Card
export const Card = styled(FlexColumn)`
  width: 350px;
  height: 452px;
  padding: 28px;
  background-color: blue;
  align-items: unset;
  background: #fafafa;
  border: 1px solid #ffffff;
  box-shadow: 0px 439px 268px rgba(0, 0, 0, 0.06), 0px 202.963px 123.905px rgba(0, 0, 0, 0.0445005), 0px 116.131px 70.8953px rgba(0, 0, 0, 0.0376069), 0px 70.4906px 43.033px rgba(0, 0, 0, 0.0323969),
    0px 42.4737px 25.9293px rgba(0, 0, 0, 0.0276031), 0px 23.6521px 14.4391px rgba(0, 0, 0, 0.0223931), 0px 10.1726px 6.21015px rgba(0, 0, 0, 0.0154995);
  border-radius: 40px;
  box-sizing: border-box;
  transition: all 0.2s;
  overflow: hidden;
`
export const CardHead = styled(Flex)`
  padding: 0 10px;
  position: relative;
  &::after {
    content: "• • •";
    position: absolute;
    left: 13px;
    bottom: -10px;
  }
`

export const CardBody = styled(FlexColumn)`
  align-items: unset;
  margin-top: 1.5rem;
  row-gap: 8px;
  max-height: 350px;
  box-sizing: border-box;
  &:hover {
    overflow: auto;
  }
`

export const CardItem = styled(FlexColumn)`
  align-items: unset;
  column-gap: 0.6rem;
  max-width: 400px;
  height: ${(props) => (props.active ? "181px" : "auto")};
  /* padding: 15px 10px; */
  background-color: ${(props) => (props.active ? "#f2f2f2" : "transparent")};
  border-radius: ${(props) => (props.active ? "20px" : "none")};
  transition: all 0.3s;
  position: relative;
  border-radius: 20px;
  &:hover {
    /* border: 1px dashed #212121; */
  }
`

export const Indicator = styled.div`
  width: ${(props) => (props.size ? props.size : "8px")};
  height: ${(props) => (props.size ? props.size : "8px")};
  background-color: ${(props) => (props.filled ? props.filled : "white")};
  border-radius: 50%;
  border: ${(props) => (props.inprogress ? "1px solid #909090" : "none")};
  transition: all 0.2s;
  cursor: pointer;
`

export const CardArea = styled.textarea.attrs({
  placeholder: "Description",
})`
  margin-top: 20px;
  margin-left: 21px;
  border: none;
  resize: none;
  max-width: 345px;
  height: 100px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  background-color: inherit;
  &::placeholder {
    color: #00000025;
    font-size: 16px;
    font-weight: 400;
  }
`

export const CardBtn = styled.button`
  display: flex;
  column-gap: 0.6rem;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 30px;
  width: 134px;
  justify-content: center;
  transition: all 0.3s;
  background-color: ${(props) => (props.discard ? "#E7D6D6" : "#DADEE9")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.discard ? "#E7D6D670" : "#DADEE970")};
  }
  &:active {
    transform: scale(0.99);
  }
  &img {
    width: 14px;
    height: 11px;
  }
`

export const CardFlex = styled(Flex)`
  cursor: pointer;
  padding: 10px;
  border-radius: 20px;
  position: relative;
  &:hover {
    background-color: #f2f2f2;
  }
`

export const NewTask = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-height: 350px;
  padding: 10px;
  background-color: white;
  border-radius: 22px;
  z-index: 1000;
  box-shadow: 0px 45px 80px rgba(0, 0, 0, 0.07), 0px 18.7999px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 10.0513px 17.869px rgba(0, 0, 0, 0.0417275), 0px 5.6347px 10.0172px rgba(0, 0, 0, 0.035),
    0px 2.99255px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 1.24527px 2.21381px rgba(0, 0, 0, 0.0196802);
  textarea {
    width: calc(100% - 20px) !important;
    font-weight: 500 !important;
    &::placeholder {
      font-size: 20px;
      font-weight: 500 !important;
    }
    &:hover {
      background-color: #f2f2f260 !important;
    }
  }
`

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Enter a title",
})`
  margin-left: 0.3rem;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  background-color: inherit;
  position: relative;
  &::placeholder {
    font-size: 20px;
    font-weight: 500;
  }
`

export const Error = styled.div`
  padding: 0.5rem;
  background-color: #212121;
  position: absolute;
  z-index: 1000;
  color: white;
  border-radius: 10px;
  top: ${(props) => (props.top ? props.top : "70px")};
  right: ${(props) => (props.right ? props.right : "-150px")};
  transition: all .2s;
  visibility: ${(props) => (props.active ? 'show' : 'hidden')};;
  transform: ${(props) => (props.active ? 'unset' : 'translateX(-20px)')};
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: -9px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right: 10px solid #212121;
  }
`

export const FlexIndicator = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  z-index: 1000;
  row-gap: 1rem;
  position: absolute;
  width: calc(100% - 100px);
  height: 20px;
  top: 50%;
  left: 2px;
  transform: translate(80px, -50%);
  padding: 0.4rem;
  background-color: #cdced1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  div,
  img {
    width: 15px;
    height: 15px;
  }
`
