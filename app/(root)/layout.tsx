import Image from "next/image";

// components
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isLoggedIn = { firstName: "Trung", lastName: "Nguyen" };

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={isLoggedIn as any} />
            
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
                    <div className="">
                        <MobileNav user={isLoggedIn as any} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}
