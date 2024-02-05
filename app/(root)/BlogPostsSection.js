import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BlogPostsSection() {
    return (
        <section className="section">
            <h2>Latest blogs</h2>
            <div className="bg-amber-200 p-6 flex flex-col md:flex-row rounded-md gap-7">
                <div className="flex flex-col md:flex-row gap-7 justify-center items-center">
                    <Image
                        src={"/images/bottle3.png"}
                        alt="Bootle"
                        width={200}
                        height={100}
                        sizes="(max-width: 768px) 50vw, 50vw"
                        className="rounded-md hover:scale-105 transition duration-300 ease-in-out"
                    />
                    <div className="flex flex-col gap-3">
                        <h3>Best Pinterest Boards for learning about</h3>
                        <p>
                            Have evolved over the years, sometimes by accident,
                            sometimes purpose.
                        </p>
                        <Button>Read more</Button>
                    </div>
                </div>
                <div className="flex gap-7 flex-col md:flex-row justify-center items-center">
                    <Image
                        src={"/images/bottle3.png"}
                        alt="Bootle"
                        width={200}
                        height={100}
                        sizes="(max-width: 768px) 50vw, 50vw"
                        className="rounded-md hover:scale-105 transition duration-300 ease-in-out"
                    />
                    <div className="flex flex-col gap-3">
                        <h3>Best Pinterest Boards for learning about</h3>
                        <p>
                            Have evolved over the years, sometimes by accident,
                            sometimes purpose.
                        </p>
                        <Button>Read more</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
