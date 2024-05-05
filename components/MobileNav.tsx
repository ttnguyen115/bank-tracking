"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// component
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

// constants
import { NavigatorPath, sidebarLinks, type SidebarLink } from "@/constants";

// utils
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    const renderSidebarLink = ({ route, label, imgURL }: SidebarLink) => {
        const isActive = pathname === route || pathname.startsWith(`${route}/`);
        const linkClassNames = cn("mobilenav-sheet_close w-full", { "bg-bank-gradient": isActive });
        const iconClassNames = cn({ "brightness-[3] invert-0": isActive });
        const labelClassNames = cn("text-16 font-semibold text-black-2", {
            "text-white": isActive,
        });

        return (
            <SheetClose asChild key={route}>
                <Link href={route} key={label} className={linkClassNames}>
                    <Image
                        src={imgURL}
                        alt={label}
                        width={20}
                        height={20}
                        className={iconClassNames}
                    />
                    <p className={labelClassNames}>{label}</p>
                </Link>
            </SheetClose>
        );
    };

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link
                        href={NavigatorPath.HOME}
                        className="cursor-pointer flex items-center gap-1 px-4"
                    >
                        <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                            FamilyBank
                        </h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map(renderSidebarLink)}
                                USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

declare interface MobileNavProps {
    user: User;
}

export default MobileNav;
