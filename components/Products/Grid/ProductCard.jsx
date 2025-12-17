
export default function ProductCard({ product }) {
  return (
    <div className="prod-it">
      <div className="inner">
        <div className="bg"></div>

        <div className="img-prod">
          <img
            src={product?.img || "/images/sample.jpg"}
            alt={product?.name}
          />
        </div>

        <div className="wr-info">
          <div className="tt">{product?.brand}</div>
          <div className="stt">{product?.name}</div>
          <div className="prc">{product?.price}</div>
        </div>
      </div>
    </div>
  );
}
