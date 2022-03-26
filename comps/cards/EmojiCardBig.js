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
  width: 220px;
  height: 220px;
  border-radius: 22px;
  box-shadow: 0px 5px 2px 0px rgba(0, 0, 0, 0.25);
  font-size:100px;
`
const EmojiText = styled.p`
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  line-height: 0;
  color:${props=>props.color};
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