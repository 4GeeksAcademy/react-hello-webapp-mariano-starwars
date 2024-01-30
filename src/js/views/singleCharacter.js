import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const character = {
    ...store.people[Number(params.uid) - 1],
    description: "Una descripción ficticia del personaje. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel massa nec justo gravida vehicula. Integer feugiat elit a nisi auctor, a tincidunt arcu pellentesque. Quisque at tristique odio. Nunc id aliquet dolor."
  };

  return (
    <div className="jumbotron text-white">
      <div className="top d-flex justify-content-around align-items-center my-4">
        <div className="left">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`}
            alt={character.name}
            style={{ width: "400px", height: "400px" }}
          />
        </div>

        <div className="right">
          <h2 className="display-4">{character.name}</h2>
          <p className="fs-4" style={{ maxWidth: "900px" }}>
            {character.description}
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="text-center">
        <div className="character-info">
          <p className="info-item">
            <span className="info-label">Height:</span> {character.height}
          </p>
          <p className="info-item">
            <span className="info-label">Mass:</span> {character.mass}
          </p>
          <p className="info-item">
            <span className="info-label">Hair Color:</span> {character.hair_color}
          </p>
          <p className="info-item">
            <span className="info-label">Skin Color:</span> {character.skin_color}
          </p>
          <p className="info-item">
            <span className="info-label">Eye Color:</span> {character.eye_color}
          </p>
        </div>
      </div>

      <Link to="/" className="btn btn-primary btn-lg" style={{ marginLeft: "30px" }}>
        Back home
      </Link>
    </div>
  );
};

SingleCharacter.propTypes = {
  match: PropTypes.object,
};

export default SingleCharacter;
