import React, {useState,useEffect} from 'react';
import { useDrag, useDrop } from 'react-dnd'
import Emoji from '../../utils/Emoji.json'
import styled from 'styled-components'

const default_data =
    {
        "name": "grapes",
        "emoji": "🍇",
        "Calories (kcal)": 0.69,
        "Carbohydrates (g)": 0.181,
        "Total Sugar (g)": 0.1548,
        "Protein (g)": 0.0072,
        "Total Fat (g)": 0.0016,
        "Saturated Fat (g)": 0.00054,
        "Monounsaturated Fat (g)": 0.00007,
        "Polyunsaturated Fat (g)": 0.00048,
        "Total Fiber (g)": 0.009,
        "Cholesterol (mg)": 0,
        "Vitamin B6 (mg)": 0.00086,
        "Vitamin A (IU)": 0.66,
        "Vitamin B12 (ug)": 0,
        "Vitamin C (mg)": 0.032,
        "Vitamin D (IU)": 0,
        "Vitamin E (IU)": 0.0019,
        "Vitamin K (ug)": 0.146,
        "Thiamin (mg)": 0.00069,
        "Riboflavin (mg)": 0.0007,
        "Niacin (mg)": 0.00188,
        "Folate (ug)": 0.02,
        "Pantothenic Acid (mg)": 0.0005,
        "Choline (mg)": 0.056,
        "Calcium (g)": 0.1,
        "Copper (mg)": 0.00127,
        "Iron (mg)": 0.0036,
        "Magnesium (mg)": 0.07,
        "Manganese (mg)": 0.00071,
        "Phosphorus (g)": 0.2,
        "Potassium (g)": 1.91,
        "Selenium (ug)": 0.001,
        "Sodium (g)": 0.02,
        "Zinc (mg)": 0.0007
      }

const CardCont =styled.div`
background:#ABC;
color:#666;
padding:5px;
display:inline-flex;
id:${props => props.id};
${({position,left,top})=> (position === 'fixed'||position === 'absolute') &&  `
left:${left}px;
top:${top}px;
position:${position};` }
`

const CardList = ({
  //props
  type ='emoji',
  cardpos=null,
  id = null,
  children =null,
  fcontent =null,
  onUpdateCard =()=>{},
  onUpdateEmoji =()=>{},
  onUpdateCode =()=>{},
  onUpdateFood = () =>{},
  foodcount = '',
  emoji = default_data.emoji,
  data = null,
}) => {
  const [pos,setPos] =useState(cardpos||{
    left:0,
    top:0,
    position:'relative'
  });


  const [foodid,setFoodid]=useState(fcontent||`
  foodid
  ${children || ''}
 `)

//   const [foodid,setFoodid] =useState(()=>{})


   useEffect(()=>{
    if(type === 'boardnotes'){
      onUpdateCard({
        pos,
        foodid
      })

    }
   },[pos,foodid])


   const [{ isDragging, coords }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type:"emoji",
    item:{},
    end:(item,monitor)=>{
        
        onUpdateFood() 
        setFoodid(foodcount)
        if(type === 'boardnotes'){
        setPos({
          left:monitor.getClientOffset().x,
          top:monitor.getClientOffset().y,
          position:'absolute'
        })
      }
 
    },
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging:monitor.isDragging(),
      coords:monitor.getClientOffset()
    })
  }))

  //console.log(isDragging);
  const sty = {
    left:type ==="boardnotes" ? pos.left:null,
    top:type ==="boardnotes" ? pos.top:null,
    position:type ==="boardnotes" ? pos.position:null,
  }

  if(coords && isDragging){
    sty.left = coords.x;
    sty.top = coords.y;
    sty.position = 'fixed';
  }


	return <CardCont ref={dragPreview} {...sty} id ={id}>
    <div ref ={drag}>
      <div>{emoji}</div>
      {/* <div>{foodcount}</div> */}
      
    </div>
    </CardCont>
    

}

export default CardList;