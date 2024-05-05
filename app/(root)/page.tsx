// components
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const isLoggedIn = { firstName: "Trung", lastName: "Nguyen", email: "123@123.com" };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={isLoggedIn.firstName || "Guest"}
                        subtext="Access and manage your account and transactions efficiently"
                    />
                    <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1234.45} />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar user={isLoggedIn} transactions={[]} banks={[{ currentBalance: 123.50 }, { currentBalance: 145.12 }]} />
        </section>
    );
};

export default Home;
