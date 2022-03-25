import Head from 'next/head'
import ax from 'axios';
import Emoji from '../utils/Emoji.json'


import React, {useState} from 'react';
import { useRouter } from 'next/router';
// import { v4 as uuidv4 } from 'uuid';

import { TouchBackend } from 'react-dnd-touch-backend'
//import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import {bgcolor} from '../comps/variable'
import { useTheme } from "../utils/provider";

// import Book from '@/comps/Book';
import Dropzone from '../comps/Dropzone';
import Button from '../comps/buttons/Button'
import NavBar from '../comps/global/Navbar'
import EmojiDnd from '../comps/cards/EmojiDnd';
import styled from 'styled-components';

const EmojiCont = styled.div`
  background: teal;
  padding: 10px;
  margin: 10px;
  width: fit-content;  
  align-items:center;
  justify-content:center;
  background-color:lightgreen;
  border-radius:20px;
`;

const CalcCont = styled.div`
  width:35%;
  height:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  flex-direction: row;
  background: gray;
  border-radius: 20px;
  overflow-y: scroll
`;

const TotalCont = styled.div`
  height: 20%;
  width: 50%;
  background-color: #DDF4C3;
  border-radius: 20px;
`

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color:${props=>props.background};
`;

export default function Calculator({
  bg = bgcolor,}) {

  var lists = []
  lists = Emoji
  const {theme} =useTheme();
  const [favs, setFavs] = useState([]);
  const [cals, setCals] = useState([]);

  
  
  const check =()=>{
    // console.log(favs[4]["Calories (kcal)"])
    var s = Object.values(favs)
    var sum =0
    for(let i = 0; i < s.length; i++){
      console.log(s[i]["Calories (kcal)"])
      sum += s[i]["Calories (kcal)"];
    }
    setCals(sum);
    window.scrollTo(0, 0);
  }

  return (
    <Cont background ={bg[theme]}>
    <NavBar title='Calculate Calories' />
    <div>
      <DndProvider backend={TouchBackend} options={{
				enableTouchEvents:false,
				enableMouseEvents:true
			}}>
        <CalcCont>
          {lists.map((o, i)=>
            <EmojiDnd
              key={i}
              item={o}
            >
              {o.emoji}
            </EmojiDnd>
          )}
        </CalcCont>
        

        <Dropzone 
        onDropItem={(item)=>{
          favs[item.name] = item;
          setFavs({
            ...favs
          })
        }} >
          <h3>Drag your meal ingredients here </h3>
          {Object.values(favs).map((o,i)=><EmojiDnd key={o.emoji} item={o}>
            <EmojiCont key={i}>
              {o.emoji} - Calories: {o["Calories (kcal)"]}
            </EmojiCont>
          </EmojiDnd> 
          )}
        </Dropzone>
       

			</DndProvider>
      <TotalCont>
        <h3>Total Calories</h3>
      <div>{cals}</div>
      </TotalCont>
      <Button onButtonClick={check}
        bgColor="white"
        borderColor="#8BE22D"
        color="#8BE22D"
        text="Calculate"
      ></Button>
            <Button onButtonClick={{}}
        bgColor="white"
        borderColor="#8BE22D"
        color="#8BE22D"
        text="Refresh"
      ></Button>
    </div>
    </Cont>
  )
}