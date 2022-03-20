import Head from 'next/head'
import ax from 'axios';
import Emoji from '../utils/Emoji.json'

import React, {useState} from 'react';
import { useRouter } from 'next/router';
// import { v4 as uuidv4 } from 'uuid';

import { TouchBackend } from 'react-dnd-touch-backend'
//import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

// import Book from '@/comps/Book';
import Dropzone from '../comps/Dropzone';

import EmojiDnd from '../comps/cards/EmojiDnd';
import styled from 'styled-components';

const EmojiCont = styled.div`
  background: teal;
  padding: 10px;
  margin: 10px;
  width: fit-content;
`;

const CalcCont = styled.div`
  display: flex;
  flex-direction: row;
  background: #FAD;
`;

export default function Calculator() {

  var lists = []
  lists = Emoji
  
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
    console.log(sum)
   
  }

  return (
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
          
          cals[item.name] =item;
          setCals(
            ...cals,
            )
        }} >
          <h3>Emoji Calculator</h3>

          {Object.values(favs).map((o,i)=><EmojiDnd key={o.emoji} item={o}>
            <EmojiCont key={i}>
              {o.emoji} - Calories: {o["Calories (kcal)"]}
            </EmojiCont>
          </EmojiDnd> 
          )}
        </Dropzone>

        <button onClick={check}></button>

			</DndProvider>
    </div>
  )
}