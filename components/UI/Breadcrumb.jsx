import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <section className="nav-bread">
      <div className="container">
        <ul className="breadcrumbs-list">
          {items.map((item, i) => {
            const isCurrent = item.active || i === items.length - 1;

            return (
              <li
                key={i}
                className={`breadcrumbs-item ${
                  isCurrent ? "current-item" : ""
                }`}
              >
                {item.href && !isCurrent ? (
                  <Link href={item.href} className="breadcrumbs-link">
                    {item.label}
                  </Link>
                ) : (
                  <a href="javascript:;" className="breadcrumbs-link">
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
