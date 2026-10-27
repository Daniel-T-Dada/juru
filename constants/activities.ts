

export interface Activity {
    id: string;
    type: 'contribution' | 'payout' | 'deposit' | 'withdrawal';
    title: string;
    description: string;
    amount: number;
    date: string;
    status: 'success' | 'failed' | 'pending';
}




export const ACTIVITIES: Activity[] = [
    {
        id: '1',
        type: 'payout',
        title: 'Tech Enthusiasts Circle',
        description: 'Cycle Payout',
        amount: 1000000,
        date: 'Today, 10:42 AM',
        status: 'success',
    },
    {
        id: '2',
        type: 'contribution',
        title: 'Juru Savings Circle',
        description: 'Weekly Contribution',
        amount: 50000,
        date: 'Yesterday, 2:30 PM',
        status: 'success',
    },
    {
        id: '3',
        type: 'deposit',
        title: 'Wallet Top-up',
        description: 'Bank Transfer',
        amount: 150000,
        date: 'Oct 22, 2026',
        status: 'success',
    },
    {
        id: '4',
        type: 'withdrawal',
        title: 'Withdrawal to GTBank',
        description: '**** 1234',
        amount: 20000,
        date: 'Oct 20, 2026',
        status: 'failed',
    },
    {
        id: '5',
        type: 'contribution',
        title: 'Family Savings Circle',
        description: 'Monthly Contribution',
        amount: 20000,
        date: 'Oct 15, 2026',
        status: 'success',
    },
    {
        id: '6',
        type: 'contribution',
        title: 'Community Builders Circle',
        description: 'Weekly Contribution',
        amount: 15000,
        date: 'Oct 14, 2026',
        status: 'success',
    },
];

export const FILTERS = ['All', 'Contributions', 'Payouts', 'Deposits'];