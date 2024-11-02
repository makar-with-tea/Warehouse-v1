// components/Navbar.tsx
import React from 'react';
import './Navbar.css';

interface NavbarProps {
  toggleSidebar: () => void; // Добавляем пропс для функции
  isSidebarOpen: boolean; // Добавляем пропс для состояния бокового меню
}

// Функциональный компонент Navbar
const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="navbar">
      {/* Обработчик клика для кнопки открытия боковой панели */}
      <div className="navbar-item" onClick={toggleSidebar}>
        {isSidebarOpen ? '✖' : '☰'} {/* Смена иконки */}
      </div>
      {/* Остальные пункты меню */}
      <div className="navbar-item">Товары</div>
      <div className="navbar-item">Склады</div>
      <div className="navbar-item">О системе</div>
      <div className="navbar-item">Личная страница пользователя</div>
    </nav>
  );
};

export default Navbar;