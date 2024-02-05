import { Button } from "@/components/ui/button";

export default function CollectionSection() {
    return (
        <section className="section md:flex-row items-center">
            <div
                className="w-80 h-96 md:w-2/3 overflow-hidden relative rounded-md bg-[url('/images/bottle1.jpg')]"
                style={{ backgroundSize: "cover" }}
            >
                <div className="absolute top-0 left-0 z-20 h-full w-full flex flex-col justify-end items-center gap-4 py-8">
                    <p className="text-white font-medium text-lg">Shop all</p>
                    <Button variation="link" className="w-44">
                        Explore Collection
                    </Button>
                </div>
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/25"></div>
            </div>
            <div
                className="w-80 h-96 md:w-2/3 overflow-hidden rounded-md bg-emerald-900"
                style={{ backgroundSize: "cover" }}
            >
                <div className="h-full w-full flex flex-col justify-center items-center gap-4 py-8 px-4 text-center">
                    <p className="text-white font-medium text-lg">
                        &quot;These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing &quot; - Carolyn Ortiz
                        &quot;Which is the same as saying through shrinking from
                        toil and pain. These cases are perfectly simple and easy
                        to distinguish&quot;
                        <br /> <br />- Carolyn Ortiz
                    </p>
                </div>
            </div>
        </section>
    );
}
