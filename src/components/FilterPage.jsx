import React, { useState } from 'react';
import data from '../data/db.json'; // JSON faylni import qilamiz
// Narx stringini raqamga aylantirish funksiyasi
const parsePrice = (priceStr) => {
  // Masalan, "35000 сум" => "35000" => 35000 (Number)
  const num = priceStr.replace(/\D/g, '');
  return Number(num);
};

// Ranglar demo ro'yxati (real ma'lumotlaringizda product.color bo'lishi kerak)
const availableColors = ['red', 'green', 'blue', 'black', 'white', 'orange'];

export default function FilterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [selectedColor, setSelectedColor] = useState('');

  // Filtrlangan mahsulotlar
  const filteredProducts = data.products.filter((product) => {
    // Narxni raqamga aylantiramiz
    const productPrice = parsePrice(product.price);

    // Qidiruv: product.title ichida searchQuery bor-yo'qligini tekshiramiz
    const matchesQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Kategoriya
    const matchesCategory = selectedCategory
      ? product.categoryId === selectedCategory
      : true;     

    // Narx oralig'i
    const matchesPrice = productPrice >= priceRange.min && productPrice <= priceRange.max;

    // Rang (demo)
    // Agar real rang ma'lumotlari bo'lsa, product.color === selectedColor
    const matchesColor = selectedColor
      ? selectedColor === 'all'
        ? true
        : product.color === selectedColor
      : true;

    return matchesQuery && matchesCategory && matchesPrice && matchesColor;
  });

  // Inline style misol tariqasida (dizayn):
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };

  const asideStyle = {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    height: 'fit-content',
  };

  const colorCircleStyle = (color) => ({
    display: 'inline-block',
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: color,
    marginRight: '8px',
    cursor: 'pointer',
    border: selectedColor === color ? '3px solid orange' : '1px solid #ccc',
  });

  const mainStyle = {
    flex: 1,
  };

  const productListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const productItemStyle = {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
    padding: '10px 0',
  };

  const productImgStyle = {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    marginRight: '12px',
  };
  return (
    <div style={containerStyle}>
      {/* ASIDE: Filter paneli */}
      <aside style={asideStyle}>
        <h2 style={{ marginBottom: '1rem', fontSize: '18px' }}>Фильтр</h2>

        {/* Qidiruv inputi */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '4px' }}>Поиск:</label>
          <input
            type="text"
            placeholder="Введите название..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Rang filtri (demo) */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '4px' }}>Цвет:</label>
          <div>
            <div
              style={{
                ...colorCircleStyle('all'),
                backgroundColor: '#f0f0f0',
              }}
              onClick={() => setSelectedColor('all')}
              title="All colors"
            />
            {availableColors.map((color) => (
              <span
                key={color}
                style={colorCircleStyle(color)}
                onClick={() => setSelectedColor(color)}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Kategoriya tanlash */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '4px' }}>Категория:</label>
          <select
            onChange={(e) =>
              setSelectedCategory(e.target.value ? Number(e.target.value) : null)
            }
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">Все</option>
            {data.CategoryCard.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Narx oralig'i */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '4px' }}>Цена:</label>
          <select
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'low') {
                setPriceRange({ min: 0, max: 25000 });
              } else if (val === 'mid') {
                setPriceRange({ min: 25000, max: 50000 });
              } else if (val === 'high') {
                setPriceRange({ min: 50000, max: Infinity });
              } else {
                setPriceRange({ min: 0, max: Infinity });
              }
            }}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">Все</option>
            <option value="low">До 25 000 сум</option>
            <option value="mid">25 000 - 50 000 сум</option>
            <option value="high">Выше 50 000 сум</option>
          </select>
        </div>
      </aside>

      {/* MAIN: Mahsulotlar ro'yxati */}
      <main style={mainStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 style={{ fontSize: '18px' }}>
            Товары по поиску ({filteredProducts.length})
          </h2>
          <a href="#!" style={{ textDecoration: 'none', color: '#ff6600' }}>
            Смотреть все &gt;
          </a>
        </div>

        <ul style={productListStyle}>
          {filteredProducts.map((product) => (
            <li key={product.id} style={productItemStyle}>
              <img
                src={product.image}
                alt={product.title}
                style={productImgStyle}
              />
              <div>
                <h3 style={{ margin: '0 0 4px' }}>{product.title}</h3>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{product.price}</p>
              </div>
            </li>
          ))}
        </ul>

        {filteredProducts.length > 0 && (
          <button
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#ff6600',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Show more
          </button>
        )}
      </main>
    </div>
  );
}
