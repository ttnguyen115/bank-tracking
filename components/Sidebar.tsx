"use client";

import Image from "next/image";
import Link from "next/link";

// hooks
import { usePathname } from "next/navigation";

// constants
import { NavigatorPath, sidebarLinks, type SidebarLink } from "@/constants";

// utils
import { cn } from "@/lib/utils";

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    const renderSidebarLink = ({ route, label, imgURL }: SidebarLink) => {
        const isActive = pathname === route || pathname.startsWith(`${route}/`);
        const linkClassNames = cn("sidebar-link", { "bg-bank-gradient": isActive });
        const iconClassNames = cn({ "brightness-[3] invert-0": isActive });
        const labelClassNames = cn("sidebar-label", { "!text-white": isActive });

        return (
            <Link href={route} key={label} className={linkClassNames}>
                <div className="relative size-6">
                    <Image src={imgURL} alt={label} fill className={iconClassNames} />
                </div>
                <p className={labelClassNames}>{label}</p>
            </Link>
        );
    };

    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link
                    href={NavigatorPath.HOME}
                    className="mb-12 cursor-pointer flex items-center gap-2"
                >
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="Bank tracking logo"
                        className="size-[24px] max-xl:size-14"
                    />
                    <h1 className="sidebar-logo">FamilyBank</h1>
                </Link>
                {sidebarLinks.map(renderSidebarLink)}
                USER
            </nav>
            FOOTER
        </section>
    );
};

declare interface SiderbarProps {
    user: User;
}

export default Sidebar;
