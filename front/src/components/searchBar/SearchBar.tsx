import React from "react";
import { SearchBarContainer, Input, ButtonSearch } from "./SearchBar.styles";

const SearchBar = (): React.ReactElement => {
  return (
    <SearchBarContainer>
      <Input type="text" placeholder="search" />
      <ButtonSearch>Search</ButtonSearch>
    </SearchBarContainer>
  );
};

export default SearchBar;
