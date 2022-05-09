import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import { auth } from './firebase';
import logo from './img/logo.png'
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
  const[{basket,user},dispatch] = useStateValue();
  const handleAuthen = () => {
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/" >
        <img
          className="header__logo"
          src={logo}
        />
      </Link>
        
        <div className="header__search">
            <div   div class="input-group mb-3">
              <button class="btn btn-outline-secondary dropdown-toggle  headall" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Kpop</a></li>
                <li><a class="dropdown-item" href="#">Jpop</a></li>
                <li><a class="dropdown-item" href="#">Anime</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Top trending</a></li>
              </ul>
              <input type="text" className="form-control header__searchInput" placeholder='Khám phá' aria-label="Text input with dropdown button" />
              <SearchIcon className="header__searchIcon " />
            </div>
            
            
        </div>

        <div className="header__nav">
            <Link to="/login" style={{ textDecoration: 'none'}}>
              <div onClick={handleAuthen} className="header__option">
                  <span className="header__optionLineOne">Chào {!user ? 'bạn': user.email}</span>
                  <span className="header__optionLineTwo">{user?'Sign Out': 'Sign In'}</span>
              </div>
            </Link>
            
            

            
            <div className="header__option your__prime">
                <span className="header__optionLineOne">Trả hàng</span>
                <span className="header__optionLineTwo">& Đặt hàng</span>
            </div>
            
            

            <div className="header__option your__prime">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              <div className="header__optionBasket">
                  <ShoppingBasketIcon className='icon_basket'/>
                  <span className="icon_basket header__optionLineTwo header__basketCount">
                  {basket?.length}
                  </span>
              </div>
            </Link>
        </div>
    </div>
    
  );
}

export default Header;