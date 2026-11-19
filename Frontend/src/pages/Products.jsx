import { Link } from "react-router-dom";

const MOCK_PRODUCTS = [
  { id: 1, name: "ALIS Velvet Lipstick", price: "12.500", img: "https://placehold.co/300x220/4b2639/fdfaf9?text=Velvet+Lipstick" },
  { id: 2, name: "Hydrating Rose Serum", price: "18.000", img: "https://placehold.co/300x220/ab5d80/fdfaf9?text=Rose+Serum" },
  { id: 3, name: "Silk Matte Foundation", price: "22.750", img: "https://placehold.co/300x220/4b2639/fdfaf9?text=Matte+Foundation" },
  { id: 4, name: "Nourishing Argan Hair Oil", price: "15.000", img: "https://placehold.co/300x220/ab5d80/fdfaf9?text=Argan+Oil" }
];

export default function Products() {
  return (
    <div>
      <h2 className="page-title">Our Products</h2>
      <div className="product-grid">
        {MOCK_PRODUCTS.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} className="product-img" />
            <h3>{item.name}</h3>
            <p>{item.price} JOD</p>
            <Link to={`/products/${item.id}`} className="btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}