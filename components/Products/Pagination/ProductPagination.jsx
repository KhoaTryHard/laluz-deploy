"use client";

export default function ProductPagination({ page = 1, totalPages = 1, onChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="pagination">
      {pages.map((p) => (
        <li key={p} className={p === page ? "active" : ""}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onChange?.(p);
            }}
          >
            {p}
          </a>
        </li>
      ))}
    </ul>
  );
}
