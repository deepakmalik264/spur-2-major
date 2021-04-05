import React from "react";
import "./CardCollection.css";
import Carousel from "react-elastic-carousel";
import Card2 from "./card2";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CardCollectionEng = (props) => {
  return (
    <div className="container">
      <div className="div1">
        <div className="sub-heading">
          <h2> Medicine </h2> <br />
        </div>

        <Carousel breakPoints={breakPoints}>
          {props.topStoriesMed.map((story) => {
            return <Card2 story={story} key={story.id} />;
          })}
        </Carousel>
      </div>

      <div className="div2">
        <div className="sub-heading">
          <h2> Ayurveda </h2> <br />
        </div>

        <Carousel breakPoints={breakPoints}>
          {props.storiesAyur.map((story) => {
            return <Card2 story={story} key={story.id} />;
          })}
        </Carousel>
      </div>

      <div className="div3">
        <div className="sub-heading">
          <h2> Professors</h2> <br />
        </div>

        <Carousel breakPoints={breakPoints}>
          {props.storiesMedProfession.map((story) => {
            return <Card2 story={story} key={story.id} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCollectionEng;