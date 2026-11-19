import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2 className="page-title">Product Details (ID: {id})</h2>
      <p>Shade and size selection will be connected to the database in upcoming labs.</p>
      <br />
      <Link to="/products" className="btn-primary" style={{ display: "inline-block", width: "auto" }}>
        Back to Products
      </Link>
    </div>
  );
}