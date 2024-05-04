import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const isLoggedIn = { firstName: "Trung" };
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
            </div>
        </section>
    );
};

export default Home;
