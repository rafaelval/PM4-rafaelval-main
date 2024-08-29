import styled from "styled-components";

const BottomContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 100%;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1b1b1b;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export { BottomContainer, ProfileContainer, MenuButton };
