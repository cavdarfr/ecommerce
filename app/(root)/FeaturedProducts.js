import ProductCard from "@/components/product-card";

export default function FeaturedProducts() {
    return (
        <section className="section">
            <h2 className="font-medium text-3xl text-center">
                Get the attention with our bottles of stainless steel! BPA-free
                & non-toxic stainless steel water bottles come in chilly &
                unique designs.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}
