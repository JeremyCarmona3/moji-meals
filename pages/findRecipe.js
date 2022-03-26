import React, { useState,useEffect } from 'react'

import NavBar from '../comps/global/Navbar'

import styled from 'styled-components'
import RecipeCard from '../comps/cards/RecipeCard'

import { useTheme } from "../utils/provider";
import {bgcolor} from '../comps/variable'
import IngredientsCard from '../comps/cards/IngredientsCard';
import DirectionsCard from '../comps/cards/DirectionsCard';
import ax from 'axios';
import { imageConfigDefault } from 'next/dist/server/image-config';

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
          <RecipeCard click ={()=>setRecipeDetail("Bacon Grilled Cheese Sandwich")} imgWidth='300'imgHeight='300'recipe = {"Bacon Grilled Cheese Sandwich"} recipeImg ={"https://www.spendwithpennies.com/wp-content/uploads/2019/04/Bacon-Grilled-Cheese-SpendWithPennies-3.jpg"}/>
          <RecipeCard click ={()=>setRecipeDetail("Eggplant Noodles")}  imgWidth='300'imgHeight='300'recipe = {"Eggplant Noodles"} recipeImg ={"https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18124700/051124051-02-grilled-eggplant-noodle-bowl-main.jpg"}/>
          <RecipeCard click ={()=>setRecipeDetail("Mushroom & Chicken Rice Cream Soup")} imgWidth='300'imgHeight='300'recipe = {"Mushroom & Chicken Rice Cream Soup"} recipeImg ={"https://www.simplejoy.com/wp-content/uploads/2014/01/creamy_chicken_and_wild_rice_soup_recipe-500x500.jpg"}/>
          <RecipeCard click ={()=>setRecipeDetail("Tomato & Rice Soup")} recipe = {"Tomato & Rice Soup"} imgWidth='300'imgHeight='300' recipeImg ={"https://joeats.net/wp-content/uploads/2019/01/Tomato-Rice-Soup-11.jpg"}/>
          <RecipeCard click ={()=>setRecipeDetail("Spicy Carrot Fried Rice")} recipe = {"Spicy Carrot Fried Rice"}imgWidth='300'imgHeight='300' recipeImg = {"https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2013-r-xl-spicy-carrot-fried-rice-2000.jpg"}/>
          <RecipeCard click ={()=>setRecipeDetail("Onion Parmesan Pasta")} recipe = {"Onion Parmesan Pasta"}imgWidth='300'imgHeight='300' recipeImg = {"https://assets.epicurious.com/photos/5cb8bce9b6addb519525d1b2/4:6/w_2520,h_3780,c_limit/Caramelized-Onion-Pasta-recipe-100419.jpg"}/>
          <RecipeCard click ={()=>setRecipeDetail("Stuffed Pepper With Rice")} recipe = {"Stuffed Pepper With Rice"} imgWidth='300'imgHeight='300'recipeImg ={'https://www.lecremedelacrumb.com/wp-content/uploads/2019/05/easy-stuffed-peppers-4-500x500.jpg'}/>
          <RecipeCard click ={()=>setRecipeDetail("Avocado Milkshake")}recipe = {"Avocado Milkshake"} imgWidth='300'imgHeight='300'recipeImg ={'https://images.unsplash.com/photo-1543648973-1eb94629e7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80'}/>
          {/* {message.map((o,i)=><div key={i} id = {o.title}>{o.title}</div>)} 

          {lists.map((o,i)=><RecipeCard id = {o.id} key={i} emoji ={o.emoji} onclick ={()=>setRecipeDetail(i)}></RecipeCard>)}
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
                recipeImg = {message?message.image:"Loading..." }
                imgWidth='500'
                imgHeight='500'
                textWidth='100%'
              />
            </FlexImg>
            <CardsCont>
              <IngredientsCard 
              title ={message?message.title:"Loading..." }
              emoji1={message?message.ingred[0]:"Loading..." } 
              emoji2= {message?message.ingred[1]:"Loading..."}
              emoji3= {message?message.ingred[2]:"Loading..."}
              emoji4= {message?message.ingred[3]:"Loading..."}
              />
              <DirectionsCard 
              direction1 = {message?message.prep[0]:"Loading..."}
              direction2 = {message?message.prep[1]:"Loading..."}
              direction3 = {message?message.prep[2]:"Loading..."}
              direction4 = {message?message.prep[3]:"Loading..."}
              direction5 = {message?message.step[0]:"Loading..."}
              direction6 = {message?message.step[1]:"Loading..."}
              direction7 = {message?message.step[2]:"Loading..."}
              direction8 = {message?message.step[3]:"Loading..."}
              ></DirectionsCard>
              {/* {message.map((o,i)=><DirectionsCard  key ={i} direction1 = {o.title}></DirectionsCard>)}  */}
  
            </CardsCont>
          </DetailsCont>
      </Cont>
    )
  }

}
