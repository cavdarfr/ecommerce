import Image from "next/image";
import Mobileavigation from "./mobile-navigation";
import DesktopNavigation from "./desktop-navigation";

export default function Header() {
    return (
        <header className="max-w-7xl w-full mx-auto flex items-center justify-between h-20 py-2 px-3 sm:px-4 md:px-6">
            {/* Logo */}
            <div>
                <Image
                    src={"/images/logo.svg"}
                    alt="Logo"
                    width={156}
                    height={28}
                />
            </div>
            {/* Navgations */}
            <Mobileavigation />
            <DesktopNavigation />
        </header>
    )
}