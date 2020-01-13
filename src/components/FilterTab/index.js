import React from "react";
import styled from "styled-components";

const FilterTabContainer = styled.div`
  width: 100%;
  background: lightgray;
  height: 40px;
  border: 1px solid black;
  cursor: pointer;
`;

const FilterTab = ({ children, onClick, stateValue }) => (
  <FilterTabContainer onClick={() => onClick(!stateValue)}>
    {children}
  </FilterTabContainer>
);

export default FilterTab;
