// components
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isLoggedIn = { firstName: "Trung", lastName: "Nguyen" };

    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={{} as any} />
            {children}
        </main>
    );
}
