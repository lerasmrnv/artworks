import React from 'react'
import logoWhite from '../../assets/images/Footer/Logo Imagine.png'
import facebook from '../../assets/images/Footer/Facebook.png'
import instagram from '../../assets/images/Footer/Instagram.png'
import whatsApp from '../../assets/images/Footer/WhatsApp.png'


export default function Footer() {
    return (
        <footer className='footer'>
            <div className='marginPage'>
                <div className='container1'>
                    <img src={logoWhite} alt='logo' />
                    <ul>
                        <li><a >Contract offer</a></li>
                        <li><a >Card payment rules</a></li>
                    </ul>
                </div>
                <div className='container2'>
                    <div className='container2-links'>
                        <ul>
                            <li><a href='imagine.com'>imagine.com</a></li>
                            <li><a href='mailto: info@imagine.com'>info@imagine.com</a></li>
                        </ul>
                        <p>© IMAGINE {(new Date().getFullYear()) - 1}.  All rights Reserved</p>
                    </div>
                    <div className='container2-socialLinks'>
                        <a href='facebook.com'><img src={facebook} alt='facebook' /></a>
                        <a href='instagram.com'><img src={instagram} alt='instagram' /></a>
                        <a href='whatsApp'><img src={whatsApp} alt='whatsApp' /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
