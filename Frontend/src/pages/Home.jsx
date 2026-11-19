import { Link } from "react-router-dom";

export default function Home() {
  const categories = ["Lips", "Skincare", "Face", "Hair"];

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Natural Beauty, Crafted for You</h2>
        <p>Explore our curated collection of makeup, skincare, and hair essentials.</p>
        <Link to="/products" className="btn-primary hero-btn">
          Shop All Products
        </Link>
      </section>

      <section className="categories-section">
        <h3>Shop by Category</h3>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link key={cat} to="/products" className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}