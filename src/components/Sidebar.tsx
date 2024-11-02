import React from 'react';
import './Sidebar.css';
import categories from '../data/exampleCategories.json';

// Интерфейс для пропсов Sidebar
interface SidebarProps {
  isOpen: boolean; // Состояние открыт/закрыт сайдбар
  onClose: () => void; // Функция закрытия сайдбара
}

// Функциональный компонент Sidebar, принимающий состояние и функцию закрытия
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}> {/* Сайдбар с классом open при открытии */}
      <button onClick={onClose}>Close</button> {/* Кнопка для закрытия сайдбара */}
      <h2>Фильтры</h2>
      {/* Форма с фильтрами */}
      <label htmlFor="search">
        Поиск:
        <input type="text" id="search" placeholder="Введите текст..." /> {/* Поле для поиска */}
      </label>
      <div>
        <label>
          <input type="checkbox" />
          Есть на складе {/* Чекбокс фильтрации по наличию на складе */}
        </label>
      </div>
      <div>
        {/* Выбор категории */}
        <label htmlFor="category">Выбрать категорию:</label>
        <select id="category">
          <option value="">Все категории</option> {/* Опция для выбора всех категорий */}
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option> /* Опции для выбора конкретной категории */)
          )}
        </select>
      </div>
    </aside>
  );
};

// Экспорт компонента Sidebar для использования в других частях приложения
export default Sidebar;