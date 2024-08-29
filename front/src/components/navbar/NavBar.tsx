import React from "react";
import {
  BackgroundMovil,
  BtnClose,
  ItemNavBar,
  NavBarContainer,
} from "./NavBar.styles";
import Link from "next/link";

const itemsNavBar: Array<string> = ["Home", "About", "Products", "Contact"];

const NavBar = ({ isMenuOpen, setIsMenuOpen }: any): React.ReactElement => {
  return (
    <>
      {!isMenuOpen && (
        <BackgroundMovil>
          <BtnClose onClick={() => setIsMenuOpen(!isMenuOpen)}>X</BtnClose>
          <NavBarContainer>
            {itemsNavBar.map((el, index) => (
              <ItemNavBar key={index}>
                <Link href={index === 0 ? "/" : `/${el.toLocaleLowerCase()}`}>
                  {el}
                </Link>
              </ItemNavBar>
            ))}
          </NavBarContainer>
        </BackgroundMovil>
      )}
    </>
  );
};
export default NavBar;
