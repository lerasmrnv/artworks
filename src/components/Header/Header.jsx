import React from 'react';
import logoBlack from '../../assets/images/Header/Logo_Imagine.png';
import homeIcon from '../../assets/images/Header/Home Icon.png';
import settingItem from '../../assets/images/Header/Settings Icon.png';
import chatIcon from '../../assets/images/Header/Chat Icon.png';
import userIcon from '../../assets/images/Header/Userpic.png';
import arrewIcon from '../../assets/images/Header/Arrow.png';
import dot from '../../assets/images/Header/dot.png';



export default function Header() {
    return (
        <header className='header marginPage'>
            <img src={logoBlack} alt='logo' />
            <nav>
                <ul className='nav-list'>
                    <li className='nav-item'><a className='nav-link'><img src={homeIcon} alt='home' /></a></li>
                    <li className='nav-item'><a className='nav-link'><img src={settingItem} alt='setting' /></a></li>
                    <li className='nav-item'><a className='nav-link'><img src={chatIcon} alt='chat' /><span><img src={dot} /></span></a></li>
                    <li className='nav-item'><a className='nav-link'><img src={userIcon} alt='user' /></a></li>
                    <li className='nav-item'><a className='nav-link'>ENG <img src={arrewIcon} alt='arrow' /></a></li>
                </ul>
            </nav>
        </header>
    )
}

