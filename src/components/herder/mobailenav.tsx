import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";
import { AiOutlineHome } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";

const MobaileNav = () => {
  return (
    <>
      <Wrapper>
        <MenuWrapper onClick={() => history.push("/")}>
          <MenuIcon>
            <AiOutlineHome color="white" />
          </MenuIcon>
          <MenuText>홈</MenuText>
        </MenuWrapper>
        <MenuWrapper onClick={() => history.push("/")}>
          <MenuIcon>
            <RiProfileLine color="white" />
          </MenuIcon>
          <MenuText>프로필</MenuText>
        </MenuWrapper>
      </Wrapper>
    </>
  );
};
//768px

const Wrapper = styled.div`
  display: none;
  z-index: 2000;
  @media only screen and (max-width: 10px) {
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    height: 10rem;
    background-color: #ff9841;
    z-index: 10;
    padding-bottom: 3rem;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  margin: 5px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const MenuIcon = styled.p`
  padding: 1rem;
  margin: 0 auto;
  font-size: 3.5rem;
  font-weight: 900;
`;

const MenuText = styled.p`
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
`;

export default MobaileNav;