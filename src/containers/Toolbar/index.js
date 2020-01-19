import React, { useEffect, useState } from "react";
import { getAllGenres, removeFilter, toggleSearch } from "../../actions/index";
import styled from "styled-components";
import Filter from "../Filter";
import { connect } from "react-redux";
import SearchButton from "../../components/SearchButton";
import SearchBar from "../../components/SearchBar";

const ToolbarWrapper = styled.div`
  height: 100px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;
  position: relative;
`;

const SelectedFilterContainer = styled.div`
  display: flex;
`;

const FilterItem = styled.div`
  background: black;
  color: white;
  padding: 10px;
  margin: 10px;
  width: 130px;
  text-align: center;
  cursor: pointer;
  position: relative;
`;

const RemoveFilterBtn = styled.span`
  display: inline-block;
  position: absolute;
  right: 5px;
`;

const ToolBar = ({
  getAllGenres,
  genres,
  selectedFilter,
  removeFilter,
  toggleSearch,
  showSearch
}) => {
  const [filterHover, setFilterHover] = useState(false);
  useEffect(() => {
    getAllGenres();
  }, []);
  return (
    <ToolbarWrapper>
      <Filter genres={genres} />
      <SearchBar showSearch={showSearch} />
      <SelectedFilterContainer
        onMouseEnter={() => setFilterHover(true)}
        onMouseLeave={() => setFilterHover(false)}
      >
        {selectedFilter &&
          selectedFilter.map(selected => (
            <FilterItem key={selected.id}>
              {selected.value}{" "}
              {filterHover && (
                <RemoveFilterBtn onClick={() => removeFilter(selected)}>
                  X
                </RemoveFilterBtn>
              )}
            </FilterItem>
          ))}
      </SelectedFilterContainer>
      <SearchButton showSearch={showSearch} toggleSearch={toggleSearch} />
    </ToolbarWrapper>
  );
};

const mapStateToProps = state => ({
  genres: state.movies.genres,
  selectedFilter: state.movies.selectedFilter,
  showSearch: state.movies.showSearch
});

export default connect(mapStateToProps, {
  getAllGenres,
  removeFilter,
  toggleSearch
})(ToolBar);
