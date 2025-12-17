"use client";

import { useMemo, useState } from "react";
import ProductFilter from "@/components/Products/Filter/ProductFilter";
import ProductToolbar from "@/components/Products/Toolbar/ProductToolbar";
import ProductGrid from "@/components/Products/Grid/ProductGrid";
import ProductPagination from "@/components/Products/Pagination/ProductPagination";
import CollectionBanner from "@/components/UI/CollectionBanner";
import { getCategoryLabel } from "@/data/categories";

const SORTS = {
  newest: "newest",
  priceAsc: "priceAsc",
  priceDesc: "priceDesc",
};

// helper: parse giá "3.450.000đ" -> 3450000
function parsePrice(v) {
  if (v == null) return 0;
  const s = String(v).replace(/[^\d]/g, "");
  return s ? Number(s) : 0;
}

export default function CollectionClient({ slug, products = [] }) {
  const [sortKey, setSortKey] = useState(SORTS.newest);
  const [page, setPage] = useState(1);
  const pageSize = 12;

  // Filter state (tối thiểu)
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [selectedGenders, setSelectedGenders] = useState(new Set());

  const label = getCategoryLabel(slug);

  // Build options cho filter từ data thật
  const brandOptions = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p?.brand && set.add(p.brand));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [products]);

  const genderOptions = ["Nam", "Nữ", "Unisex"];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okBrand =
        selectedBrands.size === 0 || (p?.brand && selectedBrands.has(p.brand));
      const okGender =
        selectedGenders.size === 0 || (p?.gender && selectedGenders.has(p.gender));
      return okBrand && okGender;
    });
  }, [products, selectedBrands, selectedGenders]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sortKey === SORTS.priceAsc) {
      arr.sort((a, b) => parsePrice(a?.price) - parsePrice(b?.price));
    } else if (sortKey === SORTS.priceDesc) {
      arr.sort((a, b) => parsePrice(b?.price) - parsePrice(a?.price));
    } else {
      // newest: ưu tiên createdAt nếu có, không có thì giữ nguyên
      arr.sort((a, b) => {
        const da = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
        const db = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
        return db - da;
      });
    }
    return arr;
  }, [filtered, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));

  const paged = useMemo(() => {
    const safePage = Math.min(Math.max(1, page), totalPages);
    const start = (safePage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, page, totalPages]);

  // reset page khi sort/filter đổi
  function resetToFirstPage() {
    setPage(1);
  }

  return (
    <section className="wrap-prod page-category">
      <div className="container">
        <div className="prod-wrap-flex">
          <aside className="prod-left">
            <ProductFilter
              brandOptions={brandOptions}
              genderOptions={genderOptions}
              selectedBrands={selectedBrands}
              setSelectedBrands={(next) => {
                setSelectedBrands(next);
                resetToFirstPage();
              }}
              selectedGenders={selectedGenders}
              setSelectedGenders={(next) => {
                setSelectedGenders(next);
                resetToFirstPage();
              }}
            />
          </aside>

          <div className="prod-right">
            <ProductToolbar
              title={label.toUpperCase()}
              sortKey={sortKey}
              setSortKey={(v) => {
                setSortKey(v);
                resetToFirstPage();
              }}
            />

            <ProductGrid products={paged} />

            <ProductPagination
              page={page}
              totalPages={totalPages}
              onChange={(p) => setPage(p)}
            />
            
          </div>
          
        </div>
        
      </div>
      <CollectionBanner />
    </section>
  );
}
