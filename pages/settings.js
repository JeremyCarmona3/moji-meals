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
  justify-content: space-between;
  background-color:${props=>props.background};
`;


const BtnRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
  padding: 0 5%;
`;

const Headers = styled.p`
  padding: 0 5%;
  font-size: 24px;
  color:${props=>props.color};
`;


export default function Settings({
  bg = bgcolor,
  color = textcolor
}) {
  const {theme} =useTheme();
  const {setTheme} = useTheme();
  return (<div style ={styles}>
  
  <Cont background ={bg[theme]}>
      <NavBar title='Settings'/>
        <Headers color ={color[theme]}>Default Preferences</Headers>
        <BtnRow>
          <Button />
          <Button text='Carbohydrates' />
          <Button text='Total Sugar' />
          <Button text='Protein' />
          <Button text='Total Fat' />
        </BtnRow>

        <Headers color ={color[theme]}>Vitamin</Headers>
        <BtnRow>
          <Button text='Vitamin B6' />
          <Button text='Vitamin A' />
          <Button text='Vitamin B12' />
          <Button text='Vitamin C' />
          <Button text='Vitamin D' />
        </BtnRow>

        <Headers color ={color[theme]}>Minerals</Headers>
        <BtnRow>
          <Button text='Total Fiber' />
          <Button text='Cholesterol' />
          <Button text='Thiamin' />
          <Button text='Sodium' />
          <Button text='Zinc' />
        </BtnRow>

        <BtnRow>
          <Button text='Calcium' />
          <Button text='Iron' />
          <Button text='Magnesium' />
          <Button text='Manganese' />
          <Button text='Potassium' />
        </BtnRow>

        <Headers color ={color[theme]}>Fat</Headers>
        <BtnRow>
          <Button text='Saturated Fat' />
          <Button text='Monounsaturated Fat' />
          <Button text='Polyunsaturated Fat' />
        </BtnRow>

        <Toggle text={"DARK Mode"} Click={()=>setTheme('dark')}></Toggle>
        <Toggle text={"Light Mode"} Click={()=>setTheme('light')}></Toggle>

      </Cont>

      </div>


  )
}
