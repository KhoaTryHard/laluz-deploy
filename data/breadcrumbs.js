import { getCategoryLabel } from "./categories";

export function buildCollectionBreadcrumb(slug) {
  return [
    { label: "Home", href: "/" },
    { label: "Sản phẩm", href: "/collections/all" },
    { label: getCategoryLabel(slug), active: true },
  ];
}

export function buildBrandBreadcrumb(brand) {
  return [
    { label: "Home", href: "/" },
    { label: "Thương hiệu", href: "/brands" },
    { label: brand, active: true },
  ];
}

export function buildProductBreadcrumb({ category, name }) {
  return [
    { label: "Home", href: "/" },
    { label: "Sản phẩm", href: "/collections/all" },
    { label: getCategoryLabel(category), href: `/collections/${category}` },
    { label: name, active: true },
  ];
}
