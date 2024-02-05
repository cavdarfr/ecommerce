'use client';

import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { FaUser, FaCartShopping, FaBarsStaggered } from "react-icons/fa6";
export default function Mobileavigation() {
    return (
        <nav className="block md:hidden">
            <Sheet>
                <SheetTrigger>
                    <FaBarsStaggered size={24} />
                </SheetTrigger>
                <SheetContent className="flex flex-col items-center justify-center">
                    <SheetHeader>
                        <ul className="flex flex-col items-start gap-6">
                            <li>
                                <Link href={"/"} className="p-3 rounded-md hover:bg-black/10 transition duration-300 ease-in-out">Accueil</Link>
                            </li>
                            <li>

                                <Link href={"/about"} className="p-3 rounded-md hover:bg-black/10 transition duration-300 ease-in-out">A propos</Link>
                            </li>
                            <li>
                                <Link href={"/shop"} className="p-3 rounded-md hover:bg-black/10 transition duration-300 ease-in-out">
                                    Boutique
                                </Link>
                            </li>
                            <li>
                                <Link href={"/account"} className="p-3 flex items-center gap-2 rounded-md hover:bg-black/10 transition duration-300 ease-in-out">
                                    <FaUser size={24} className="align-middle" />
                                    <span className="align-middle">Compte</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/cart"} className="p-3 flex items-center gap-2 rounded-md hover:bg-black/10 transition duration-300 ease-in-out">
                                    <FaCartShopping size={24} className="align-middle" />
                                    <span className="align-middle">Panier</span>
                                </Link>
                            </li>
                        </ul>
                    </SheetHeader>
                </SheetContent>
            </Sheet>


        </nav>
    )
}