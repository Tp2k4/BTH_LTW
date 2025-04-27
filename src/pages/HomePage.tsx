import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

const products: Product[] = [
  { id: 1, name: 'Áo Thun', price: 150000, image: 'src/assets/products.jpg' },
  { id: 2, name: 'Quần Jean', price: 300000, image: 'src/assets/products.jpg' },
  { id: 3, name: 'Giày Sneaker', price: 500000, image: 'src/assets/products.jpg' },
  { id: 4, name: 'Mũ Lưỡi Trai', price: 80000, image: 'src/assets/products.jpg' },
  { id: 5, name: 'Túi Xách', price: 250000, image: 'src/assets/products.jpg' },
  { id: 6, name: 'Áo Khoác', price: 400000, image: 'src/assets/products.jpg' },
  { id: 7, name: 'Kính Mát', price: 120000, image: 'src/assets/products.jpg'},
  { id: 8, name: 'Đồng Hồ', price: 1000000, image:'src/assets/products.jpg' },
  { id: 9, name: 'Dép Lê', price: 60000, image: 'src/assets/products.jpg' },
  { id: 10, name: 'Áo Sơ Mi', price: 200000, image: 'src/assets/products.jpg' },
  { id: 11, name: 'Dép CrosCros', price: 60000, image: 'src/assets/products.jpg' },
  { id: 12, name: 'Áo Blazer', price: 200000, image: 'src/assets/products.jpg' }
];

function HomePage() {
  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Trang chủ mua sắm</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h3>{product.name}</h3>
            </Link>
            <p>{product.price.toLocaleString()} VNĐ</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
