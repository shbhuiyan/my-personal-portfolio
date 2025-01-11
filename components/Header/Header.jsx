import Link from "next/link";
import { Button } from "../ui/button";
import Nav from "../Nav/Nav";
import MobileNav from "../Nav/MobileNav";
import { FiDownload } from "react-icons/fi";


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
                    <a href="resume.pdf" download="Resume_of_Sakhawat_Hossen.pdf">
                        <Button className="space-x-2">
                            <span>Resume</span>
                            <FiDownload />
                        </Button>
                    </a>
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