import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css';
const Header = () => {
  return (
    <div className='header'>
      
      <div className='header_first'>
      <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
      
      <div className="header_first1"> 

        <span style={{
          fontSize:'15px',
          color:'white',
          fontStyle:'italic'
        }}>Explore</span>

        <span style={{
        color:'#f9e107',
        fontSize:'18px',
        fontStyle:'italic'}}>Plus</span>

        <span>
          <img width="15" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/>
        </span>
      </div></div>
      <div className='header_second'>
        <input type="text" placeholder='Search for products, brands and more' />
        <SearchIcon />

      </div>
      <div className='header_third'>
        <Tippy theme="light" content={<LoginT></LoginT>}interactive={true} offset={[5,18]}>
         <button>Login</button>
         </Tippy>
         </div>
         
      <div className='header_fourth'>
      <Tippy theme="light" content={<MoreT></MoreT>}
      interactive={true} offset={[5,18]}>
        <span>More</span>
      </Tippy>
        <ExpandMoreIcon/>
      </div>
      <div className='header_fifth'>
        
        <ShoppingCartIcon />
        <span>Cart</span>
      </div>
      
    </div>
  )
}

export default Header

