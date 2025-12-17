function StatCard({ title, value, desc }) {
  return (
    <div className="box-info text-center">
      <div className="tt">{title}</div>
      <p className="price-new" style={{ fontSize: "3.5rem" }}>
        {value}
      </p>
      <p className="txt-nm">{desc}</p>
    </div>
  );
}
