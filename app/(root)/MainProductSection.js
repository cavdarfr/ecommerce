import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MainProductSection() {
    return (
        <section className="section md:flex-row items-center">
            <div className="flex flex-col gap-7">
                <h2 className="font-medium text-3xl">The travel majesty</h2>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi.
                </p>
                <div>
                    <p>Hot for 8hrs</p>
                    <p>Cold for 14hrs</p>
                </div>
                <Button className="w-56">$10.00 USD View Detail</Button>
            </div>
            <Image
                src={"/images/bottle3.png"}
                alt="Bottle"
                width={500}
                height={600}
            />
        </section>
    );
}
