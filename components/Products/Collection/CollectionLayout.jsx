import CollectionClient from "./CollectionClient";

export default function CollectionLayout({ slug, products = [] }) {
  return <CollectionClient slug={slug} products={products} />;
}
