export const CATEGORY_LABELS = {
  all: "Nước hoa",
  "nuoc-hoa": "Nước hoa",
  "nuoc-hoa-nam": "Nước hoa nam",
  "nuoc-hoa-nu": "Nước hoa nữ",
  unisex: "Unisex",
};

export function getCategoryLabel(slug) {
  return CATEGORY_LABELS[slug] || slug?.replaceAll("-", " ") || "Danh mục";
}
