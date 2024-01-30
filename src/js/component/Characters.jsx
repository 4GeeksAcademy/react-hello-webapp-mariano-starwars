import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

const Characters = () => {
  const { store, actions } = useContext(Context);
  const [hoveredFavorites, setHoveredFavorites] = useState({});

  const handlerMouseOverLike = (name) => {
    setHoveredFavorites({ ...hoveredFavorites, [name]: true });
  };

  const handlerMouseLeaveLike = (name) => {
    setHoveredFavorites({ ...hoveredFavorites, [name]: false });
  };

  return (
    <>
      <h1 className="title-p my-3">Characters</h1>
      <div className="d-flex flex-row overflow-auto my-5 mx-5">
        {store.people &&
          store.people.length > 0 &&
          store.people.map((item, index) => (
            <div className="cards mx-5" key={index}>
              <div
                onMouseOver={() => handlerMouseOverLike(index)}
                onMouseLeave={() => handlerMouseLeaveLike(index)}
                className="card mb-5"
                style={{ width: "20rem" }}
              >
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.url.split("/")[5]}.jpg`}
                  className={
                    hoveredFavorites[index]
                      ? "card-img-top glow"
                      : "card-img-top"
                  }
                  alt="..."
                />
                <div
                  className={
                    hoveredFavorites[index]
                      ? "card-body glow"
                      : "card-body"
                  }
                >
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"> Genero: {item.gender}</p>
                  <p className="card-text">Hair Color: {item.hair_color}</p>
                  <p className="card-text">Eye Color: {item.eye_color}</p>
                  <div className="buttons">
                    <Link
                      to={"/singleCharacter/" + item.url.split("/")[5]}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Learn more!
                    </Link>
                    <div className="buttonContainer">
                      <button
                        className="button-container"
                        onClick={() => {
                          actions.addFavorite(item.name);
                        }}
                        onMouseOver={() => handlerMouseOverLike(index)}
                        onMouseLeave={() => handlerMouseLeaveLike(index)}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={
                            hoveredFavorites[index]
                              ? "heart-icon glow"
                              : "heart-icon"
                          }
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Characters;
