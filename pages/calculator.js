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
          favs[item.emoji] = item;
          setFavs({
            ...favs
          })
        }} >
          <h3>Emoji Calculator</h3>
          {/* {favs.map((o,i)=>{
            return <FavCont key={i} item={o}>
              {o.title}
            </FavCont>
          })} */}

          {Object.values(favs).map((o,i)=><EmojiDnd key={o.emoji} item={o}>
            <EmojiCont key={i} item={o}>
              {o.emoji} - Calories: {o.Calories}
            </EmojiCont>
          </EmojiDnd> 
          )}
        </Dropzone>

			</DndProvider>
    </div>
  )
}