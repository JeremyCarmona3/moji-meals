import styled from 'styled-components'
import { bgcolor,buttoncolor,textcolor } from '../variable';
import { useTheme } from '../../utils/provider';

const ButCont = styled.button`
background-color:${props=>props.background};
width:100px;
margin:10px;
display:flex;
justify-contents:center;
align-item:center;
border-radius:5px;
text-align:center;
`

const ButLabel =styled.label`
font-size:15px;
text-align:center;
color:${props=>props.color}

`;

const Toggle = ({
bg = buttoncolor,
text="Start",
Click=(()=>{}),
})=>{
    const {theme} =useTheme();
    
        return(
        <ButCont background ={bg[theme]} onClick ={Click}>
            <ButLabel>{text}</ButLabel>
        </ButCont>
    )
}

export default Toggle;