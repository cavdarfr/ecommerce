import Footer from "@/components/footer";
import Header from "@/components/header";

export default function RootLayout({ children }) {
    return (
        <main className="h-full">
            <Header />
            {children}
            <Footer />
        </main>
    );
}
