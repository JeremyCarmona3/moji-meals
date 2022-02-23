import Head from 'next/head'
import Image from 'next/image'

import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
import EmojiCard from '../comps/cards/EmojiCard'
import EmojiCardBig from '../comps/cards/EmojiCardBig'
import HighlightCard from '../comps/cards/HighlightCard'
import NutritionCard from '../comps/cards/NutritionCard'
import AmountBar from '../comps/global/AmountBar'
import Bar from '../comps/global/Bar'
import Toggle from '../comps/buttons/Toggle'

import { useTheme } from "../utils/provider";
import {bgcolor,textcolor} from '../comps/variable'

import styled from 'styled-components'


import styles from '../styles/Home.module.css'


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  padding: 0 5%;
  justify-content: space-between;
  background-color:${props=>props.background}
`;

const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
`;

const Headers = styled.p`
  font-size: 24px;
  color:${props=>props.color}
`;


export default function Settings({
  bg = bgcolor,
  color = textcolor
}) {
  const {theme} =useTheme();
  const {setTheme} = useTheme();
  return (
  
  <Cont background ={bg[theme]}>
      <NavBar title='Settings'/>
        <Headers color ={color[theme]}>Default Preferences</Headers>
        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <Headers color ={color[theme]}>Vitamin</Headers>
        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <Headers color ={color[theme]}>Minerals</Headers>
        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <Headers color ={color[theme]}>Fat</Headers>
        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <BtnRow>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </BtnRow>

        <Toggle text={"DARK Mode"} Click={()=>setTheme('dark')}></Toggle>
        <Toggle text={"Light Mode"} Click={()=>setTheme('light')}></Toggle>

      </Cont>

     


  )
}
