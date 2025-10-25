import React from 'react';
import logo from '../assets/img/logo.png';

function Header() {
return (
    <header className="header">
        <div className="container header-container">
            <a href="#" className="logo">
                <img src={logo} alt="Логотип" style={{ width: '100px', height: 'auto' }} />
            </a>

            <nav className="nav">
                <a href="#services">Услуги</a>
                <a href="#form">Записаться</a>
                <a href="#contacts">Контакты</a>
            </nav>
            <a href="tel:+77788963877" className="header-phone">+7 (778) 896-38-77</a> 
            {/* ^ Замените на ваш реальный номер */}
        </div>
    </header>
);
}

export default Header;