import React from "react";
import "./card.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Rand from "./Modal/ModalCard";

function Card(props) {
  const { story } = props;
  console.log("hello me descfjdl fjfldfk");
  console.log(story.description);

  return (
    <>
      <div className="card-body">
        <div className="card1-top">
          <img alt="person-pic" src={story.source} />
        </div>

        <div className="card-bottom">
          <h3 className="h3-name"> {story.name} </h3>
          <h5 className="h5-position"> {story.position} </h5>
          <p className="p-story"> {story.description} </p>
        </div>
        <div className="see-more-icon">
          <FavoriteIcon className="heart-icon" />

          <Rand
            name={story.name}
            story={story.story}
            position={story.position}
          />

          <ShareIcon className="share-icon" />
        </div>
      </div>
    </>
  );
}
export default Card;
