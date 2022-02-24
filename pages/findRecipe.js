import React, { useState } from 'react'

import NavBar from '../comps/global/Navbar'

import styled from 'styled-components'
import RecipeCard from '../comps/cards/RecipeCard'

import { useTheme } from "../utils/provider";
import {bgcolor} from '../comps/variable'
import IngredientsCard from '../comps/cards/IngredientsCard';
import DirectionsCard from '../comps/cards/DirectionsCard';

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

export default function FindRecipe({
  bg = bgcolor,
}) {
  const {theme} =useTheme();

  const [recipeDetail, setRecipeDetail] = useState('main')
  var status = recipeDetail

  const goBack = () => {
    setRecipeDetail('main');
  }

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
        </RecipeCont>
      </Cont>
    )
  }
  
  if (status == recipeDetail){
    return(
      <Cont background ={bg[theme]}>
        <NavBar 
          title='Recipes'
          showBackBtn=''
          showLogo='none'
          backOnClick={goBack}
        />
          <DetailsCont>
            <RecipeCard 
              imgWidth='500'
              imgHeight='500'
              textWidth='100%'
            />
            <CardsCont>
              <IngredientsCard />
              <DirectionsCard />
            </CardsCont>
          </DetailsCont>
      </Cont>
    )
  }

}
