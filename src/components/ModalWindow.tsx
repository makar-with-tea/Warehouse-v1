import React, { useState } from 'react';
import './ModalWindow.css';
import placeholderImage from '../assets/placeholderImage.jpg';
import { Product } from '../types/types';

// Интерфейс пропсов для ModalWindow
interface ModalWindowProps {
  product: Product;
  onClose: () => void; // Функция закрытия модального окна
}

// Функциональный компонент ModalWindow, принимающий свойства продукта и функцию закрытия
const ModalWindow: React.FC<ModalWindowProps> = ({ product, onClose }) => {
  // Хранение URL изображения с помощью состояйния
  const [imgSrc, setImgSrc] = useState(product.imageUrl || placeholderImage);

  // Функция обработки ошибок загрузки изображения
  const handleError = () => {
    setImgSrc(placeholderImage); // Установить изображение-заглушку
  }

  return (
    <div className="modal" onClick={onClose}> {/* Обертка: окно закрывается по клику за его пределами */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Останавливка события клика, чтобы предотвратить закрытие при клике внутри окна */}
        <button onClick={onClose}>×</button> {/* Кнопка закрытия модального окна */}
        <h2 className="product-name">{product.name}</h2>
        <img src={imgSrc} alt={product.name} onError={handleError} className="product-image" /> {/* Изображение продукта с обработчиком ошибок */}
        <div className="product-details"> {/* Контейнер для деталей продукта */}
          <p><strong>Описание:</strong> {product.description}</p>
          <p><strong>Категория:</strong> {product.category}</p>
          <p><strong>Количество:</strong> {product.quantity} {product.unit}</p> {/* Количество и единица измерения продукта */}
        </div>
      </div>
    </div>
  );
};

// Экспорт компонента ModalWindow для использования в других частях приложения
export default ModalWindow;