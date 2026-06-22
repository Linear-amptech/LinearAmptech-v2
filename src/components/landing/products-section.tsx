import { productCategories, products } from "@/components/landing/data";
import { ProductImageCard } from "@/components/landing/product-image-card";
import { Reveal } from "@/components/landing/reveal";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="section-shell border-y border-white/10 bg-[#050b15]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="section-kicker">Products</p>
          <h2 className="section-title">
            RF front-end product portfolio from PA modules to mm-wave ICs.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            The portfolio is organized like a semiconductor product catalogue:
            component families, validated chip/module options, integration
            readiness, and customization paths for customer programs.
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <div className="product-category-rail">
            {productCategories.map((category, index) => (
              <a key={category} href="#products" className="category-link">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {category}
              </a>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.name}>
              <ProductImageCard product={product} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
