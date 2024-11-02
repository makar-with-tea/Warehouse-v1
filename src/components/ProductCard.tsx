import React, {useState} from 'react';
import './ProductCard.css';
import { Product } from '../types/types';
import placeholderImage from '../assets/placeholderImage.jpg';

// Функциональный компонент ProductCard, принимающий свойства продукта
const ProductCard: React.FC<Product> = ({ name, description, category, quantity, unit, imageUrl }) => {
  // Хранение URL изображения с помощью состояния
  const [imgSrc, setImgSrc] = useState(imageUrl || placeholderImage);
  // Функция обработки ошибок загрузки изображения
  const handleError = () => {
    setImgSrc(placeholderImage); // Установить изображение-заглушку
  };

  return (
    <div className="product-card"> {/* Обертка для карточки продукта */}
      <div className="product-image"> {/* Контейнер для изображения */}
        {imgSrc ? (
          <img src={imgSrc} alt={name} onError={handleError} />
        ) : (
          <span>{name}</span>
        )}
        {/* Если изображение не загружено, отображается название продукта */}
      </div>
      {/* Остальная информация о продукте */}
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description? description : "-"}</p>
      <p className="product-category">{category? category : "-"}</p>
      <p className="product-quantity">{quantity} {unit}</p>
    </div>
  );
};

// Экспорт компонента ProductCard для использования в других частях приложения
export default ProductCard;