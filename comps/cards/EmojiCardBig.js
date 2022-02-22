import styled from 'styled-components'
import React from 'react'

const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const EmojiCardCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18vw;
  height: 30vh;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 1%;
  font-size:70px;
`
const EmojiText = styled.p`
  display: flex;
  font-size: 20px;
`
const EmojiCardBig = ({
  emojiname="default",
  imagesrc= "🍇"
})=>{
  return<MainCont>
    <EmojiCardCont >
    {imagesrc}
    </EmojiCardCont>

  <EmojiText>{emojiname}</EmojiText>
  </MainCont>
}

export default EmojiCardBig;