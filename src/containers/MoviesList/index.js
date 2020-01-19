import React from "react";
import MovieItem from "../../components/MovieItem";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleSearch } from "../../actions";

const MoviesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  opacity: ${({ showSearch }) => (showSearch ? 0.5 : 1)};
`;

const MoviesList = ({ loading, movies, showSearch, toggleSearch }) => {
  return (
    <MoviesListWrapper
      onClick={showSearch ? () => toggleSearch(!showSearch) : null}
      showSearch={showSearch}
    >
      {loading && <h1>Loading...</h1>}
      {movies ? (
        movies.map(movie => (
          <MovieItem showSearch={showSearch} movie={movie} key={movie.id} />
        ))
      ) : (
        <p>Sorry, nothing found :(</p>
      )}
    </MoviesListWrapper>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  showSearch: state.movies.showSearch
});

export default connect(mapStateToProps, { toggleSearch })(MoviesList);
