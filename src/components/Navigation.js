import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring';
import NavigationMenu from './NavigationMenu';


function Navigation() {

  const [showMenu, setShowMenu] = useState( false );

  const maskTransitions = useTransition( showMenu, null, {
    from: {position: 'fixed', opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  } );

  const menuTransitions = useTransition( showMenu, null, {
    from: {opacity: 0, transform: 'translateX(-100%)'},
    enter: {opacity: 1, transform: 'translateX(0%)'},
    leave: {opacity: 0, transform: 'translateX(-100%)'}
  } );


  return (
    <nav>

      <span className='text-xl cursor-pointer border-l-2 p-3 pl-5'>
        <FontAwesomeIcon
          icon={showMenu ? faTimes : faBars}
          onClick={() => setShowMenu( !showMenu )}
        />
        <span className='text-xs font-light pl-2'>Меню</span>
      </span>

      {maskTransitions.map( ({item, key, props}) =>
        item &&
        <animated.div
          className='bg-black-t-50 fixed top-0 left-0 w-full z-40 h-full'
          key={key}
          style={props}
          onClick={() => setShowMenu( false )}
        >️</animated.div>
      )}

      {menuTransitions.map( ({item, key, props}) =>
        item &&
        <animated.div
          className='
            text-center pt-4 fixed
            bg-white top-0 left-0
            w-4/5 h-full z-50 shadow'
          key={key}
          style={props}
        >
          <NavigationMenu
            closeMenu={() => setShowMenu( false )}
          />
        </animated.div>
      )}

    </nav>
  );
}

export default Navigation;