import styled from "styled-components";

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 228px;
height: 64px;
border-radius: 22px;
background: ${props=>props.bgColor};
`;

const ButtonText = styled.h1`
color: ${props=>props.color};
`;

export default function Button({
    text ="Calories",
    color ="white",
    bgColor ="#498098",
    onButtonPress
})
{
return <Container onPress={onButtonPress} bgColor={bgColor}>
    <ButtonText color={color}>{text}</ButtonText>
</Container>;

}