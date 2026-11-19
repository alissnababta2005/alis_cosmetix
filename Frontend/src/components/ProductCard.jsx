export default function ProductCard({ name, price, onAdd }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{price} JOD</p>
      <button className="btn-primary" onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}