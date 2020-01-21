import React from "react";
import { connect } from "react-redux";
import CastMember from "../../components/CastMember";
import styled from "styled-components";

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

const SectionHeading = styled.h2`
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 30px;
  span {
    font-style: italic;
  }
`;

const ListItem = styled.li`
  width: 360px;
`;

const Cast = ({ cast, movie }) => {
  return (
    <>
      <SectionHeading>
        Cast of <span>{movie}</span>{" "}
      </SectionHeading>
      <ListContainer>
        {cast.map(c => (
          <ListItem>
            <CastMember key={c.id} castMember={c} />
          </ListItem>
        ))}
      </ListContainer>
    </>
  );
};

const mapStateToProps = state => ({
  cast: state.movie.cast
});

export default connect(mapStateToProps)(Cast);
