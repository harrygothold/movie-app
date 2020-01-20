import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovieById } from "../../actions";

const MoviePage = ({ getMovieById, match, movie }) => {
  useEffect(() => {
    const getMovie = async () => {
      await getMovieById(match.params.id);
    };
    getMovie();
  }, [getMovieById, match.params.id]);
  return (
    <div>
      {
          movie && (
              <h1>{movie.title}</h1>
          )
      }
    </div>
  );
};

const mapStateToProps = state => ({
    movie: state.movie.movie,
})

export default connect(mapStateToProps, { getMovieById })(MoviePage);
