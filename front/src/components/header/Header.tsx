"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../navbar";
import SearchBar from "../searchBar";
import Categories from "../categories";
import Profile from "../profile";
import { BottomContainer, MenuButton, ProfileContainer } from "./Header.styles";

const Header = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768 && setIsMenuOpen(false);
    });
  }, [window.innerWidth]);

  return (
    <div className=" bg-gradient-to-b from-slate-400 to-slate-700 flex flex-wrap justify-center flex-col items-center h-1/5">
      <div className="flex justify-around w-full h-1/4">
        <img
          className="w-1/5 h-1/5 ml-5 mt-5 rounded-3xl"
          src="/logo.PNG"
          alt="logo"
        />
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</MenuButton>
      </div>
      <div className="flex justify-between items-center flex-col">
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <SearchBar />
        <BottomContainer>
          <Categories />
        </BottomContainer>
      </div>
    </div>
  );
};

export default Header;
