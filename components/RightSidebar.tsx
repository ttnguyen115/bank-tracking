"use client";

import Image from "next/image";
import Link from "next/link";

// components
import BankCard from "./BankCard";

// constants
import { NavigatorPath } from "@/constants";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
    const { firstName, lastName, email } = user;

    const renderProfile = () => (
        <div className="profile">
            <div className="profile-img">
                <span className="text-5xl font-bold text-blue-500">{firstName[0]}</span>
            </div>
            <div className="profile-details">
                <h1 className="profile-name">
                    {firstName} {lastName}
                </h1>
                <p className="profile-email">{email}</p>
            </div>
        </div>
    );

    const renderBankCards = () => {
        if (banks && banks.length > 0) {
            return (
                <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                    <div className="relative z-10">
                        <BankCard
                            key={banks[0].$id}
                            account={banks[0]}
                            userName={`${firstName} ${lastName}`}
                            showBalance={false}
                        />
                    </div>
                    {banks[1] && (
                        <div className="absolute right-0 top-8 z-0 w-[90%]">
                            <BankCard
                                key={banks[1].$id}
                                account={banks[1]}
                                userName={`${firstName} ${lastName}`}
                                showBalance={false}
                            />
                        </div>
                    )}
                </div>
            );
        } else return null;
    };

    return (
        <aside className="right-sidebar">
            <section className="flex flex-col pb-8">
                <div className="profile-banner" />
                {renderProfile()}
            </section>
            <section className="banks">
                <div className="flex w-full justify-between">
                    <h2 className="header-2">My Banks</h2>
                    <Link href={NavigatorPath.HOME} className="flex gap-2">
                        <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
                        <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
                    </Link>
                </div>
                {renderBankCards()}
            </section>
        </aside>
    );
};

declare interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: Bank[] & Account[];
}

export default RightSidebar;
