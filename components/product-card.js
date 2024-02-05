import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="flex flex-col gap-5 w-72">
            <Image src="/images/bottle1.jpg" alt="bottle" width={500} height={300} className="rounded-md"
            />
            <div>
                <h2 className="font-medium text-3xl">
                    Steel Insulated Water Bottle
                </h2>
                <p>
                    $ 30.00 USD
                </p>
            </div>
        </div>
    )
}