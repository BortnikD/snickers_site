import React from "react";
import { Link } from "react-router-dom";
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/" className="header-title">SnikersHub</Link>
                <div className="header-items">
                    <Link to="/about" className="header-item">Про нас</Link>
                    <Link to="/contacts" className="header-item">Контакты</Link>
                    <label className="header-item">Кабинет</label>
                    <label className="header-item">Корзина</label>
                </div>
            </header>
        )
    }
}

export default Header;