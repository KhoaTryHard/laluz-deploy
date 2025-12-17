import Breadcrumb from "@/components/UI/Breadcrumb";
import { buildCollectionBreadcrumb } from "@/data/breadcrumbs";
import CollectionLayout from "./CollectionLayout";

export default function CollectionPage({ slug, products }) {
  const breadcrumbItems = buildCollectionBreadcrumb(slug);

  return (
    <main className="main spc-hd spc-hd-2">
      <Breadcrumb items={breadcrumbItems} />
      <CollectionLayout slug={slug} products={products} />
    </main>
  );
}
