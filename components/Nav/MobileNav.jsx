// this "use client" use for usePathname hooks
"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/pages/services",
  },
  {
    name: "Resume",
    path: "/pages/resume",
  },
  {
    name: "Work",
    path: "/pages/work",
  },
  {
    name: "Contact",
    path: "/pages/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
            {/* Logo */}
        <div className="mt-32 mb-20 text-center text-2xl">
            <Link href="/">
                <h1 className="text-3xl font-semibold">Sakhawat<span className="text-accent">.</span></h1>
            </Link>
        </div>
        {/* Nav options */}
        <div className="flex flex-col items-center gap-8">
            {
                Links.map((link , i) => <Link key={i} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`} > {link.name} </Link> )
            }
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
