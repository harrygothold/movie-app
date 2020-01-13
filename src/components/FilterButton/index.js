import React from "react";
import styled from "styled-components";

const FilterButtonContainer = styled.button`
  width: 150px;
  padding: 10px 5px;
  background: white;
  color: black;
  border: 1px solid black;
  transition: all 0.3s;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background: black;
  }
`;

const FilterButton = ({ children, setFilterToggle, filterToggle }) => (
  <FilterButtonContainer onClick={() => setFilterToggle(!filterToggle)}>
    {children}
  </FilterButtonContainer>
);

export default FilterButton;
