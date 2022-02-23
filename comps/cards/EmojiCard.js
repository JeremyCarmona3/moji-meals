import styled from 'styled-components'

const EmojiCont = styled.div`
width:200px;
height:200px;
min-width:200px;
display:${props=>props.display};
align-items:center;
justify-content:center;
background-color:lightgreen;
border:${props=>props.border};
border-radius:20px;
margin:10px;
`

const EmojiSize = styled.div`
display:flex;
font-size:60px;
`
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
      
const EmojiCard = ({
emoji = default_data.emoji,
onclick=()=>{},
display ="flex",
border = "",
id = "lemon"
})=>{
    return(
        <EmojiCont id = {id} onClick={onclick} display ={display} border = {border}>
            <EmojiSize>{emoji}</EmojiSize>  
        </EmojiCont>
    
    )

}

export default EmojiCard;