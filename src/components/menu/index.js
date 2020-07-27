import React from 'react'
import logo from '../../assets/590cf48e751521bc9a71c9df66a1ee96.png'
import ButtonLink from '../button'
import './menu.css'
function Nav(){

    return (
        <nav className="Menu">
            <img className="Logo" src={logo} alt="TechFlix"/>
            <ButtonLink className="ButtonLink" href="/new_list">Crie uma nova Lista</ButtonLink>
        </nav>
    );
}
export default Nav