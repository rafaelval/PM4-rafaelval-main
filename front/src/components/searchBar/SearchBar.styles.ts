import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
`;

export const ButtonSearch = styled.button`
  background-color: #1b1b1b;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  &:hover {
    background-color: #4800ff;
  }
`;

export const SearchBarContainer = styled.div`
width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

