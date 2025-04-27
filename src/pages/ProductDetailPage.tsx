import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types/Product';

const productData: Record<number, Product> = {
  1: { id: 1, name: 'Áo Thun', price: 150000, image: 'src/assets/products.jpg' },
  2: { id: 2, name: 'Quần Jean', price: 300000, image: 'src/assets/products.jpg' },
  3: { id: 3, name: 'Giày Sneaker', price: 500000, image: 'src/assets/products.jpg' },
  4: { id: 4, name: 'Mũ Lưỡi Trai', price: 80000, image: 'src/assets/products.jpg' },
  5: { id: 5, name: 'Túi Xách', price: 250000, image: 'src/assets/products.jpg' },
  6: { id: 6, name: 'Áo Khoác', price: 400000, image: 'src/assets/products.jpg' },
  7: { id: 7, name: 'Kính Mát', price: 120000, image: 'src/assets/products.jpg'},
  8: { id: 8, name: 'Đồng Hồ', price: 1000000, image:'src/assets/products.jpg' },
  9: { id: 9, name: 'Dép Lê', price: 60000, image: 'src/assets/products.jpg' },
  10: { id: 10, name: 'Áo Sơ Mi', price: 200000, image: 'src/assets/products.jpg' },
  11: { id: 11, name: 'Dép CrosCros', price: 60000, image: 'src/assets/products.jpg' },
  12: { id: 12, name: 'Áo Blazer', price: 200000, image: 'src/assets/products.jpg' }
};

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? productData[parseInt(id)] : undefined;

  if (!product) {
    return <h2>Không tìm thấy sản phẩm</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
      <h1>{product.name}</h1>
      <p><strong>Giá:</strong> {product.price.toLocaleString()} VNĐ</p>
      <p>{product.description}</p>
      <button onClick={() => navigate('/cart')}>Thêm vào giỏ hàng</button>
    </div>
  );
}

export default ProductDetailPage;
