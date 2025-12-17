import ProductCard from "@/components/Products/Grid/ProductCard";

export default function ProductGrid({ products = [] }) {
  return (
    <div className="list-prod">
      <div className="prod-flex">
        {products.map((item, index) => (
          <div className="prod-col" key={index}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
