import React from "react";
import MovieItem from "../../components/MovieItem";
import styled from "styled-components";
import { connect } from "react-redux";

const MoviesListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const MoviesList = ({ loading, movies }) => {
  return (
    <MoviesListWrapper>
      {loading && <h1>Loading...</h1>}
      {movies ? (
        movies.map(movie => <MovieItem movie={movie} key={movie.id} />)
      ) : (
        <p>Sorry, nothing found :(</p>
      )}
    </MoviesListWrapper>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading
});

export default connect(mapStateToProps)(MoviesList);
