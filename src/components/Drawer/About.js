import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-body">
      <div className="about-top">
        <div className="meet-team">
          <h1 className="about-h1">
            <strong> Meet the Team </strong>
          </h1>
        </div>

        <div className="about-wrapper">
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Ashutosh Tripahthi" src="https://media-exp1.licdn.com/dms/image/C5635AQHgGlELq2Kniw/profile-framedphoto-shrink_400_400/0/1616426426486?e=1617613200&v=beta&t=V-l67Zme_1ErGLPMdvLLMildvxX3wzYn74er_EXl11o" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Ashutosh Tripathi </h3>
              <h5 className="div-1-position"> Founder </h5>
              <p className="div-1-story">
                {" "}
                with over 300k subscribers. After graduating with a degree in
                Mathematics from the University of Pennsylvania in May 2016, he
                decided to learn programming and to enroll in Fullstack Academy,
                an immersive coding bootcamp in New York City. While there, he
                fell in love with full-stack development and algorithm analysis.
                Upon completion of the program, he dove deeper into the field of
                algorithms and aced the Google interviews. The frustration that
                he felt during his interview prep led him to creating
                AlgoExpert. He used AlgoExpert to prepare for the Facebook
                interviews; unsurprisingly, he aced them!{" "}
              </p>
            </div>
          </div>
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="deepak malik" src="data:image/jpeg;base64,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" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Deepak Malik </h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
                {" "}
                with over 300k subscribers. After graduating with a degree in
                Mathematics from the University of Pennsylvania in May 2016, he
                decided to learn programming and to enroll in Fullstack Academy,
                an immersive coding bootcamp in New York City. While there, he
                fell in love with full-stack development and algorithm analysis.
                Upon completion of the program, he dove deeper into the field of
                algorithms and aced the Google interviews. The frustration that
                he felt during his interview prep led him to creating
                AlgoExpert. He used AlgoExpert to prepare for the Facebook
                interviews; unsurprisingly, he aced them!{" "}
              </p>
            </div>
          </div>
          <div className="div-1">
            <div className="div-1-top">
              <img alt ="Manik Papneja" src="data:image/jpeg;base64,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" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Manik Papneja</h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
                {" "}
                with over 300k subscribers. After graduating with a degree in
                Mathematics from the University of Pennsylvania in May 2016, he
                decided to learn programming and to enroll in Fullstack Academy,
                an immersive coding bootcamp in New York City. While there, he
                fell in love with full-stack development and algorithm analysis.
                Upon completion of the program, he dove deeper into the field of
                algorithms and aced the Google interviews. The frustration that
                he felt during his interview prep led him to creating
                AlgoExpert. He used AlgoExpert to prepare for the Facebook
                interviews; unsurprisingly, he aced them!{" "}
              </p>
            </div>
          </div>
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Nitesh Gupta" src="https://media-exp1.licdn.com/dms/image/C5603AQHbE-Z6HCjF2g/profile-displayphoto-shrink_400_400/0/1616784106774?e=1623283200&v=beta&t=pEnF1uZRb9f4bwyU6_BroXS52lB6KcEIHp5kwOL1bns" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> NItesh Gupta</h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
                {" "}
                with over 300k subscribers. After graduating with a degree in
                Mathematics from the University of Pennsylvania in May 2016, he
                decided to learn programming and to enroll in Fullstack Academy,
                an immersive coding bootcamp in New York City. While there, he
                fell in love with full-stack development and algorithm analysis.
                Upon completion of the program, he dove deeper into the field of
                algorithms and aced the Google interviews. The frustration that
                he felt during his interview prep led him to creating
                AlgoExpert. He used AlgoExpert to prepare for the Facebook
                interviews; unsurprisingly, he aced them!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
