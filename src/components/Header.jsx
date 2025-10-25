import React, { useState } from "react";
import logo from "../assets/img/logo.png"; // Ваш путь к логотипу

// Иконки для бургера и "крестика"
const BurgerIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width="30"
        height="30"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
    </svg>
);

const CloseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width="30"
        height="30"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        />
    </svg>
);

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Функция для переключения меню
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Блокируем прокрутку body, когда меню открыто
        document.body.classList.toggle("no-scroll", !isMobileMenuOpen);
    };

    // Функция для закрытия меню при клике на ссылку
    const handleLinkClick = () => {
        if (isMobileMenuOpen) {
            toggleMobileMenu();
        }
    };

    return (
        <header className="header">
            <div className="container header-container">
                {/* Логотип */}
                <a href="#" className="logo" onClick={handleLinkClick}>
                    <img
                        src={logo}
                        alt="Логотип vihlopnaya.01"
                        className="logo-img"
                    />
                    <span className="logo-text">vihlopnaya.01</span>
                </a>

                {/* Навигация (обернута для адаптива) */}
                <div
                    className={`header-nav-wrapper ${
                        isMobileMenuOpen ? "active" : ""
                    }`}
                >
                    <nav className="nav">
                        <a href="#services" onClick={handleLinkClick}>
                            Услуги
                        </a>
                        <a href="#form" onClick={handleLinkClick}>
                            Записаться
                        </a>
                        <a href="#contacts" onClick={handleLinkClick}>
                            Контакты
                        </a>
                        <a href="tel:+77788963877" className="header-phone">
                            +7 (778) 896-38-77
                        </a>
                    </nav>
                </div>

                {/* Кнопка Бургера (появляется на мобильных) */}
                <button className="burger-menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <CloseIcon /> : <BurgerIcon />}
                </button>
            </div>
        </header>
    );
}

export default Header;
