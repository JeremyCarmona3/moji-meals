import styled from 'styled-components'
import React from 'react'

import { useTheme } from "../../utils/provider";
import {switchcolor ,textcolor, circlecolor} from '../../comps/variable'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SwitchCont = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 50px;
  background-color: ${props=>props.switchcolor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  position: relative;
  left: ${props=>props.left};
  width: 20px;
  height: 20px;
  background-color: ${props=>props.circlecolor};
  border-radius: 50%;
  transition: left .3s;
`;

const ModeText = styled.p`
  color: ${props=>props.textcolor};;
`;

export default function ToggleSwitch({
	
}) {
  const {theme} =useTheme();
  const {setTheme} = useTheme();

  return (
    <Cont>
      <SwitchCont onClick={()=>setTheme(theme==='light'?'dark':'light')} switchcolor={switchcolor[theme]}>
        <Circle left={theme==="light"?'-11px':'11px'} circlecolor={circlecolor[theme]}/>
      </SwitchCont>
      <ModeText textcolor={textcolor[theme]}>
        {theme==='light' ? 'Light mode' : 'Dark mode'}
      </ModeText>
    </Cont>
  );
}
