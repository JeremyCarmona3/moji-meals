

import React, { useState } from 'react'

import NavBar from '../comps/global/Navbar'

import styled from 'styled-components'
import RecipeCard from '../comps/cards/RecipeCard'

import { useTheme } from "../utils/provider";
import {bgcolor} from '../comps/variable'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color:${props=>props.background};
`;

const RecipeCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 0 5%;
`;

export default function FindRecipe({
  bg = bgcolor,
}) {
  const {theme} =useTheme();

  const [recipeDetail, setRecipeDetail] = useState('main')
  var status = recipeDetail

  if (status === 'main') {
    return (
      <Cont background ={bg[theme]}>
        <NavBar title='Find Recipe' />
        <RecipeCont >
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
          <RecipeCard click ={()=>setRecipeDetail("Honey Drizzles Berry Banana Toast")}/>
        </RecipeCont>
      </Cont>
    )
  }
  
  if (status == recipeDetail){
   return(
   <Cont background ={bg[theme]}>
    <NavBar title='Find Recipe' />
    <RecipeCont >
        <p>hello</p>
    </RecipeCont>
  </Cont>
)
  }

}
