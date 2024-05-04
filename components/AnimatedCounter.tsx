"use client";

// components
import CountUp from "react-countup";

const AnimatedCounter = ({ amount = 100 }: AnimatedCounter) => {
    return (
        <div className="w-full">
            <CountUp decimal="," decimals={2} prefix="$" end={amount} />
        </div>
    );
};

declare interface AnimatedCounter {
    amount: number;
}

export default AnimatedCounter;
