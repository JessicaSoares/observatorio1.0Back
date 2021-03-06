import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavbarSub.css';


function NavSubItem(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
};

  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
      boxClass.push('menuq2');
  }else{
      boxClass.push('');
  }

  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
  }else {
      boxClassSubMenu.push('');
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbarteste'>

      <p className='navbar-logo-sub' >
          <img src={props.imageicon} />
            {props.subname} </p>

            <div className='menu-icon' onClick={handleClick}>
           
     
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
       
          <li className='nav-item-sub'>
            <Link to= {props.link1} className='nav-links-sub' onClick={closeMobileMenu}>
             {props.name1}
            </Link>
          </li>
          <li className='nav-item-sub'>
          <Link to= {props.link2} className='nav-links-sub' onClick={closeMobileMenu}>
             {props.name2}
            </Link>
          </li>
          <li className='nav-item-sub'>
          <Link to= {props.link3} className='nav-links-sub' onClick={closeMobileMenu}>
             {props.name3}
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default NavSubItem;