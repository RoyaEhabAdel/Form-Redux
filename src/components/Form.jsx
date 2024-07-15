import React, { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { postUser } from '../redux/api';

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageSrc, setImageSrc] = useState("");

    const { loading, error } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        postUser({ name, email, imageSrc }, dispatch);
        
        // Clear input fields after submission
        setName("");
        setEmail("");
        setImageSrc("");
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' placeholder='Enter Name...' value={name} onChange={(e)=> setName(e.target.value)}></input>
                </div>
                <div>
                    <input type='email' placeholder='Enter Email...' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
                </div>
                <div>
                    <input type='text' placeholder='Enter Profile image URL (recommended "use GoogleDrive")' value={imageSrc} onChange={(e)=> setImageSrc(e.target.value)} />
                </div>

                {loading ? 'Loading...' : <button>Submit</button> }

                {error && 'Please Try again' }
            </form>
        </div>
    );
}
