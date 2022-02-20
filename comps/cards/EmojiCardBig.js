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
`
const EmojiImageCont = styled.img`
  display: flex;
  width: 50%;
  height: 50%;
  background: #fff;
  
`
const EmojiText = styled.text`
  display: flex;
  
  font-size: 20px;
`
const EmojiCardBig = ({
  emojiname="default",
  imagesrc="https://placekitten.com/100/100"
})=>{
  return<MainCont>
    <EmojiCardCont >
    <EmojiImageCont src={imagesrc}/>
  </EmojiCardCont>

  <EmojiText>{emojiname}</EmojiText>
  </MainCont>
}

export default EmojiCardBig;