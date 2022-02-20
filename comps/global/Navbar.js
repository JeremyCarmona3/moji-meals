import react, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { IoMenu, IoArrowBackOutline, IoClose } from "react-icons/io5";

const NavCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 120px;
`;

const HeaderText = styled.p`
  font-size: 50px;
  color: #FFA722;
`;

const RowCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CloseCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 5%;
  padding-right: 10%;
`;

const LinksCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  border: 1px solid black;
`;

const LinksCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10%;
`;

const Link = styled.a`

`;

const NavBar = ({
  title='Discover eMoj',
  logo='/Logo.png'
}) => {
  const [links, setLinks] = useState(false);

  const showLinks = () => {
    setLinks(true);
  }

  const showNav = () => {
    setLinks(false);
  }

  if (links === false) {
    return (
      <NavCont>
        <RowCont>
          <IoArrowBackOutline size={60} />
          <HeaderText>
            {title}
          </HeaderText>
        </RowCont>
        <RowCont>
          <Image src={logo} alt="Moji Meals Logo" width={243} height={122}/>
          <IoMenu 
            size={60} 
            onClick={showLinks}
          />
        </RowCont>
      </NavCont>
    );
  } else {
      return(
        <LinksCont>
          <CloseCont>
            <IoClose
              size={60} 
              onClick={showNav}
            />
          </CloseCont>
          <LinksCol>
            <Image src={logo} alt="Moji Meals Logo" width={243} height={122} layout='fixed'/>
            <Link>Home</Link>
            <Link>Nutrition</Link>
            <Link>Settings</Link>
          </LinksCol>
        </LinksCont>
      );
  }
}

export default NavBar;