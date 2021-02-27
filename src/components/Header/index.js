import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';


export default function Header() {
    return (
        <div className='header'>

            <h1> Welcome to grocery app </h1>

            <Link to='/cart'>
                <a href='#'>
                    <i class="fas fa-shopping-cart"></i>
                </a>
            </Link>

        </div>
    )
}