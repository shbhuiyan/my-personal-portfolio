"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";


const  Links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Projects",
        path: "/pages/projects",
    },
    {
        name: "About",
        path: "/pages/about",
    },
    {
        name: "Contact",
        path: "/pages/contact",
    },
]


const Nav = () => {

    const pathname = usePathname()

    return (
        <div className="flex items-center gap-8">
            {
                Links.map((link , i) => <Link key={i} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} > {link.name} </Link> )
            }
        </div>
    );
};

export default Nav;