import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import CollectionSection from "./CollectionSection";
import MainProductSection from "./MainProductSection";
import PartnersSection from "./PartnersSection";
import BlogPostsSection from "./BlogPostsSection";
import SocialMediaSection from "./SocialMediaSection";

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <HeroSection />
            {/* Sample Products */}
            <FeaturedProducts />
            {/* Collection */}
            <CollectionSection />
            {/* MainProductSection */}
            <MainProductSection />
            {/* PartnersSection */}
            <PartnersSection />
            {/* Blog Posts */}
            <BlogPostsSection />
            {/* Social media */}
            <SocialMediaSection />
        </main>
    );
}
