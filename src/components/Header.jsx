import React from 'react';
import {useSelector} from 'react-redux'

export default function Header() {
    const {name} = useSelector(state => state.user.userData)
  return (
    <div className='header'>
        <h1>Form</h1>
        <p>Hello {name}</p>
    </div>
  )
}
