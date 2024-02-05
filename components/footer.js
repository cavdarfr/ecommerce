import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-300 text-white">
            <div className="container mx-auto px-4 py-8 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <div className="mb-4">
                            {/* Logo and slogan */}
                            <a
                                href="/"
                                aria-current="page"
                                className="inline-block"
                            >
                                <Image
                                    src="/images/logo.svg"
                                    alt="logo"
                                    width={200}
                                    height={80}
                                />
                            </a>
                            <p className="text-sm mt-2">
                                Colder. Hotter.
                                <br />
                                Longer. Happier.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <div>
                            <a
                                href="/"
                                aria-current="page"
                                className="footer-link block mt-1 text-sm"
                            >
                                Home
                            </a>
                            <a
                                href="/shop"
                                aria-current="page"
                                className="footer-link block mt-1 text-sm"
                            >
                                Shop
                            </a>
                            <a
                                href="/about"
                                aria-current="page"
                                className="footer-link block mt-1 text-sm"
                            >
                                About
                            </a>
                            <a
                                href="/contact"
                                aria-current="page"
                                className="footer-link block mt-1 text-sm"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-center">
                        Designed by{" "}
                        <a
                            href="https://www.cavdar.fr"
                            target="_blank"
                            className="underline"
                        >
                            Cavdar.fr,
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
