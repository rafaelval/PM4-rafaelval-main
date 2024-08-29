import styled from "styled-components";
const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  width: max-content;
  height: 100%;
  padding-top: 150px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: transparent;
  }
`;

const BtnClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  background-color: black;
  border-radius: 100px;
  display: flex;
  padding: 2px 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const BackgroundMovil = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media screen and (min-width: 768px) {
    position: relative;
    background-color: transparent;
  }
`;

const ItemNavBar = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: rgb(36, 163, 236);
  }
`;

export { NavBarContainer, ItemNavBar, BackgroundMovil, BtnClose };
