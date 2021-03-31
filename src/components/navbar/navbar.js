import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DehazeIcon from '@material-ui/icons/Dehaze';



function Navbar ()
{

  
  
  return (
   <div className ="navbar">

<div className="dehaze_icon"  >
  <DehazeIcon />
</div>


    
     <div className ="header_search">
       <input className="header_searchInput" type ="text"  placeholder=" search"/ > 
       <SearchIcon className ="header_searchIcon"> </SearchIcon>
      <div className="header_spur">
        <span className="spur_nav1"> <strong> S P U R </strong> </span> 
         
  </div> 
  <img className ="logo" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiioRe-O3h4oU0MutMdr-3nrMw7oFFKVAuSw&usqp=CAU" ></img>
       </div>
      
         <div className="header_nav">
         <div className="header_option">
         <span className="sign"> Sign In</span>
         </div>
         <div className="header_option">
         <span className="logout"> Logout</span>
         </div>
         <div className="header_option">
         <span className="save"> Save</span>
         </div>
         <div className="basket">
           <FavoriteIcon />
           <span className="saved_num saved_count" > 0 </span>
         </div>
      
         </div>
       
         

       
       </div>
     
 

  );

  
}

  
export default Navbar;