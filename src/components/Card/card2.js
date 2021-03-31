import React from 'react';
import "./card2.css";

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Rand from './Modal/ModalCard';

function Card2 (props) 
{
  const { story } = props;
 
  return (
           <div className="card-body">
               <div className="card2-top">
                   <img  alt ="person-pic" src ={story.source} />
                   
               </div>

               <div className="card-bottom">
                  <h3> {story.name} </h3>
                  <h5> {story.position} </h5>
                  <p> {story.description} </p>
                  
                 </div>
                 <div className ="see-more-icon">
                    <FavoriteIcon className ="heart-icon" />
        <Rand name={story.name} position={story.position} story={story.story}/>
                    <ShareIcon className ="share-icon" />
                    </div>
                
             </div>
  );
}
export default Card2;
