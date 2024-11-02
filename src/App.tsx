// App.tsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';
import './App.css';

// Главный функциональный компонент приложения
function App() {
  // Состояние для бокового меню
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Функция для переключения состояния бокового меню
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <header>
        {/* Передача функции и состояния бокового меню в компонент Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </header>
        {/* Передача состояния и функции закрытия в компонент Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main style={{ marginTop: '60px' }}> {/* Отступ для контента */}
        <h1>Склад "Лаванда"</h1>
        <ProductList />
      </main>
    </div>
  );
}

export default App;