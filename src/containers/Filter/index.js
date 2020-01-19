import React, { useState } from "react";
import FilterButton from "../../components/FilterButton";
import styled from "styled-components";
import FilterTab from "../../components/FilterTab";
import { connect } from "react-redux";
import { filterMovies, sortAZ, sortZA } from "../../actions/";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 45%;
`;

const FiltersWrapper = styled.div`
  width: 100%;
  z-index: 100;
  display: block;
  border: 1px solid black;
  overflow-y: scroll;
`;

const FilterListItem = styled.div`
  background: white;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: white;
    background: black;
  }
`;

const FilterListContainer = styled.div`
  height: 120px;
  overflow-y: scroll;
`;

const Filter = ({ genres, filterMovies, sortAZ, sortZA }) => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const handleFilterClick = (value, name) => {
    filterMovies(value, name);
    setFilterToggle(false);
  };

  const handleAZClick = () => {
    sortAZ();
    setFilterToggle(false);
  };

  const handleZAClick = () => {
    sortZA();
    setFilterToggle(false);
  };

  return (
    <FilterContainer>
      <FilterButton
        setFilterToggle={setFilterToggle}
        filterToggle={filterToggle}
      >
        Filter
      </FilterButton>
      {filterToggle && (
        <FiltersWrapper>
          <FilterTab onClick={setOpenFilters} stateValue={openFilters}>
            Genre
          </FilterTab>
          {openFilters && (
            <FilterListContainer>
              <ul>
                {genres &&
                  genres.genres.map(filter => (
                    <FilterListItem
                      onClick={() => handleFilterClick(filter.id, filter.name)}
                      key={filter.id}
                    >
                      {filter.name}
                    </FilterListItem>
                  ))}
              </ul>
            </FilterListContainer>
          )}
          <FilterTab onClick={setOpenSort} stateValue={openSort}>
            Sort
          </FilterTab>
          {openSort && (
            <FilterListContainer>
              <ul>
                <FilterListItem onClick={() => handleAZClick()}>
                  Sort A-Z
                </FilterListItem>
                <FilterListItem onClick={() => handleZAClick()}>
                  Sort Z-A
                </FilterListItem>
              </ul>
            </FilterListContainer>
          )}
        </FiltersWrapper>
      )}
    </FilterContainer>
  );
};

export default connect(null, { filterMovies, sortAZ, sortZA })(Filter);
