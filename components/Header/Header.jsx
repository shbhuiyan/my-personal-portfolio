import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "../Nav/Nav";
import MobileNav from "../Nav/MobileNav";


const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Sakhawat<span className="text-accent">.</span></h1>
                </Link>

                {/* nav for Desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/pages/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    );
};

export default Header;