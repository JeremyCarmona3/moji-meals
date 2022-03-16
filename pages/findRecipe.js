import React, { useState,useEffect } from 'react'

import NavBar from '../comps/global/Navbar'

import styled from 'styled-components'
import RecipeCard from '../comps/cards/RecipeCard'

import { useTheme } from "../utils/provider";
import {bgcolor} from '../comps/variable'
import IngredientsCard from '../comps/cards/IngredientsCard';
import DirectionsCard from '../comps/cards/DirectionsCard';
import ax from 'axios';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color:${props=>props.background};
`;

const RecipeCont = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 0 5%;
`;

const DetailsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 5%;
`;

const CardsCont = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const FlexImg = styled.div`
  margin-right: 30px;
`;

export default function FindRecipe({
  bg = bgcolor,
}) {
  const {theme} =useTheme();
  const [message, setMessage] = useState();
  const [recipeDetail, setRecipeDetail] = useState('main')
  var status = recipeDetail

  const goBack = () => {
    setRecipeDetail('main');
    console.log()
  }
  
  useEffect(() =>{
    const readPost = async ()=>{
      const res  = await ax.get(`https://emoji-meal-backend.herokuapp.com/getRecipe/${status}`)
      // console.log(res.data)
      setMessage(res.data)
    }
    readPost();
  },[status])



  if (status === 'main') {
    return (
      <Cont background ={bg[theme]}>
        <NavBar title='Find Recipe' />
        <RecipeCont >
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Eggplant Chilli Noodles")}/>
          <RecipeCard click ={()=>setRecipeDetail("Mushroom & Rice Cream Soup")}/>
          <RecipeCard click ={()=>setRecipeDetail("Tomato & Rice Soup")}/>
          <RecipeCard click ={()=>setRecipeDetail("Spicy Carrot Fried Rice")}/>
          <RecipeCard click ={()=>setRecipeDetail("Onion Parmesan Pasta")}/>
          <RecipeCard click ={()=>setRecipeDetail("Stuffed Pepper With Rice")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          {/* {message.map((o,i)=><div key={i} id = {o.title}>{o.title}</div>)} 
        */}
        </RecipeCont>
      </Cont>
    )
  }
  
  if (status == recipeDetail){
   console.log(message?message.title:"message")
 
    return(
      <Cont background ={bg[theme]}>
        <NavBar 
          title='Recipes'
          showBackBtn=''
          showLogo='none'
          backOnClick={goBack}
        />
          <DetailsCont>
            <FlexImg>
              <RecipeCard 
                imgWidth='500'
                imgHeight='500'
                textWidth='100%'
              />
            </FlexImg>
            <CardsCont>
              <IngredientsCard emoji={message?message.Emoji:"Loading..."} />
              <DirectionsCard 
              direction1 = {message?message.prep1:"Loading..."}
              direction2 = {message?message.prep2:"Loading..."}
              direction3 = {message?message.prep3:"Loading..."}
              direction4 = {message?message.prep4:"Loading..."}
              direction5 = {message?message.subtext1:"Loading..."}
              direction6 = {message?message.subtext2:"Loading..."}
              direction7 = {message?message.subtext3:"Loading..."}
              direction8 = {message?message.subtext4:"Loading..."}
              ></DirectionsCard>
              {/* {message.map((o,i)=><DirectionsCard  key ={i} direction1 = {o.title}></DirectionsCard>)}  */}
  
            </CardsCont>
          </DetailsCont>
      </Cont>
    )
  }

}
