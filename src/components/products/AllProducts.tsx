import { ProductPortfolioCard } from "../landing/landing-content-sections";
import { products } from "@/components/landing/data";
export const AllProdcuts = () => {
  return (
    <>
      {products.map((product) => (
        <ProductPortfolioCard
          key={product.slug}
          product={product}
          useHomepageImage
        />
      ))}
    </>
  );
};
