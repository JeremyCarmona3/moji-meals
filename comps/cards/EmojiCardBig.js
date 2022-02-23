import styled from 'styled-components'
import React from 'react'
import { useTheme } from "../../utils/provider"
import {bgcolor,textcolor} from '../../comps/variable'


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
  color:${props=>props.color}
`
const EmojiCardBig = ({
  emojiname="default",
  imagesrc= "🍇",
  color = textcolor
})=>{

  const {theme} =useTheme();
  
  return<MainCont>
    <EmojiCardCont >
    {imagesrc}
    </EmojiCardCont>

  <EmojiText color= {color[theme]}>{emojiname}</EmojiText>
  </MainCont>
}

export default EmojiCardBig;