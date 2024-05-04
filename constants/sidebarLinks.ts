import { NavigatorPath } from "./routes";

const { HOME, MY_BANKS, PAYMENT_TRANSFER, TRANSACTION_HISTORY } = NavigatorPath;

export declare interface SidebarLink {
    imgURL: string;
    route: string;
    label: string;
}

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: "/icons/home.svg",
        route: HOME,
        label: "Home",
    },
    {
        imgURL: "/icons/dollar-circle.svg",
        route: MY_BANKS,
        label: "My Banks",
    },
    {
        imgURL: "/icons/transaction.svg",
        route: TRANSACTION_HISTORY,
        label: "Transaction History",
    },
    {
        imgURL: "/icons/money-send.svg",
        route: PAYMENT_TRANSFER,
        label: "Transfer Funds",
    },
];
