import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ModalWindow from './ModalWindow';
import './ProductList.css';
import products from '../data/exampleProducts.json';
import { Product } from '../types/types';

// Функциональный компонент ProductList
const ProductList: React.FC = () => {
  // Хранение состояния выбранного продукта с помощью хука useState
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Функция-обработчик клика по карточке продукта
  const handleCardClick = (product: Product) => {
    setSelectedProduct(product); // Установка выбранного продукта в состояние
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedProduct(null); // Сброс выбранного продукта
  };

  return (
    <div className="product-list-container"> {/* Обертка для списка продуктов */}
      <div className="product-list">
        {/* Отображение список продуктов с помощью map */}
        {products.map((product, index) => (
          <div key={index} onClick={() => handleCardClick(product)}>
            {/* Передача продукта в компонент ProductCard */}
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      {/* Отображение модального окна при выбранном продукте */}
      {selectedProduct && (
        <ModalWindow product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

// Экспорт компонента ProductList для использования в других частях приложения
export default ProductList;