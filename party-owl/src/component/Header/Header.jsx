import React from 'react';
import './Header.css';
import {ReactComponent as Logo} from '../..//assets/logo.svg'

const Header= ()=>{
  return (
    <div className = "header" data-testid = "test-id-2">
      <Logo style = {{ width: '50px'  , height : '50px' , padding:'0px' , marginRight: '0px' , marginTop : '0px' , margin : '0%' , position: 'float'}}/>
      <div style ={{}}>
        <h3>party-owl</h3>
      </div>
      <div class="input-group search-bar">
           <input type="search" class="form-control rounded search-bar-input" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
           <button type="button" class="btn btn-outline-primary search-bar-button">search</button>
      </div>
    </div>
  );
}

export default Header;