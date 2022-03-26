import Head from 'next/head'
import ax from 'axios';
import Emoji from '../utils/Emoji.json'


import React, {useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import { io } from "socket.io-client";
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
  display:flex;
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
  width:100%;
  height:100%;
  padding:30px;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-self:center;
  flex-direction: row;
  background: gray;
  border-radius: 20px;
  overflow-y: scroll
`;

const TotalCont = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction: column;
  margin:20px;
  height: 40%;
  width: 60%;
  background-color: #DDF4C3;
  border-radius: 20px;
`

const ButtonCont = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
  height: 20%;
  justify-content: center;
  width: 100%;
  border-radius: 20px;
`


const MessageCont = styled.div`
  width:100%;
  height:60%;
  margin:0px;
  display:flex;
  flex-direction:column;
  juestify-contents:center;
  alighn-item:center;
  background: gray;
  border-radius: 20px;
`;


const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color:${props=>props.background};
`;

const MainCont = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content: space-evenly;
  flex-direction: row;
  border-radius: 20px;
  background-color:#DDF4C3;
  overflow-y: scroll
`;

const SubCont = styled.div`
  width:100%;
  height:100%;
  display:flex;
  margin:20px;
  flex-wrap:wrap;
  justify-content: space-evenly;
  flex-direction: row;
  border-radius: 20px;
  background-color:#DDF4C3;
`;

const SettingCont = styled.div`
  width:100%;
  height:70%;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  flex-direction: row;
  background: gray;
  border-radius: 20px;
`;

const ProviderCont = styled.div`
  display: flex;   
  width:100%;
  height:100%;
  flex-direction: row;
  border-radius: 20px;
`;

const MessageCard = styled.div`
  display: flex;   
  width:80%;
  height:60%;
  align-self:center;
  flex-direction: row;
  border-radius: 20px;
  margin:10px;
`;

const MessageInput = styled.input`
  type:text;   
  width:80%;
  height:40%;
  align-self:center;
  margin:10px;
  border-radius: 20px;
`;

const MessageButton = styled.button`
  type:text;   
  width:50%;
  height:10%;
  align-self:center;
  margin:10px;
  border-radius: 10px;
`;

const MessageBox = styled.div`
  width:100%;
  height:40%;
  display:flex;
  margin:10px;
  flex-direction:column;
  juestify-contents:center;
  alighn-item:center;
  border-radius: 20px;
  background:white;
  overflow-y: scroll
`;





export default function Calculator({
  bg = bgcolor,}) {

  var lists = []
  lists = Emoji
  
  const {theme} =useTheme();
  const [favs, setFavs] = useState([]);
  const [cals, setCals] = useState([]);
  const [mySoc, setMySoc]= useState(null)
  const [text, setText]= useState('')
  const [msgs,setMsgs]= useState([])
  const [users,setUser] =useState({}); 
  const [mouseps,setMousePos] =useState({
    left:0,
    top:0
  })



  useEffect(()=>{
    // const socket = io("ws://example.com/my-namespace", {
    //   reconnectionDelayMax: 10000,
    //   auth: {
    //     token: "123"
    //   },
    //   query: {
    //     "my-key": "my-value"
    //   }
    // });

    const socket =io('http://localhost:8888')

    socket.on('init_user',(users)=>{
    setUser(users)
    })
  
    socket.on('update_mouse',(x,y)=>{
      console.log('hi')
      setMousePos({
        left:x,
        top:y
      })
    })
    
    
    socket.on('joined',(id,text)=>{
      // alert(`${id} says ${text}`)
      setMsgs((prev)=>[
        ...prev,
        `${id} sats${text}`
      ]
      )
    })
    setMySoc(socket)
  }, [])

  const EmitMouseMove = async (x,y) =>{
    console.log(x,y)
    if(mySoc !== null)
    mySoc.emit('mouse_xy',x,y)
  }

 const EmitToIO =async()=>{
   if(mySoc !== null){
     mySoc.emit('user_ready',text)
   } 
 }



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
    <MainCont>


    <ProviderCont>
     <DndProvider backend={TouchBackend} options={{
				enableTouchEvents:false,
				enableMouseEvents:true
			}}>
        
        <SubCont>
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
       
       
       
     <SettingCont>
          <TotalCont>     
            <h3>Total Calories</h3>
            <div>{cals}</div>
          </TotalCont>

          <ButtonCont>
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
          </ButtonCont>

          <MessageCont>
            <MessageInput onChange={(e)=>setText(e.target.value)}></MessageInput>
            <MessageButton  onClick={EmitToIO}>Leave message</MessageButton>  
          </MessageCont>

          <MessageBox>
            {msgs.map((o,i) =><MessageCard key={i} style ={{background:'lightgreen',padding:10}}>
              {o}
          </MessageCard>
                )}

          </MessageBox>
       
        </SettingCont>
     </SubCont>



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


			</DndProvider>

     </ProviderCont>

   </MainCont>
    </Cont>
  )
}