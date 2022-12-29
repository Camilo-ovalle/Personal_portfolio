import React from 'react';
import '../styles/Global.css'
import '../styles/NavBar.scss'

function NavigationBar() {
    return(
    <nav>
        <div>
            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Experience</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default NavigationBar;