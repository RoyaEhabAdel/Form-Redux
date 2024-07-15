import React from 'react';
import {useSelector} from 'react-redux'

export default function Sidebar() {
    const {name, imageSrc} = useSelector(state => state.user.userData);
    const {success} = useSelector(state => state.user)

  return (
    <div className='sidebar'>
        {success &&
        <div className='personal-data'>
        <img src={imageSrc} alt='' />
        <h2>{name}</h2>
        </div>
        }

        <ul>
            <li> <a href='###'>Home</a> </li>
            <li> <a href='###'>About</a> </li>
            <li> <a href='###'>Contact us</a> </li>
        </ul>
    </div>
  )
}
