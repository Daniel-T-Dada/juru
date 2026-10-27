export interface Group {
    id: string;
    name: string;
    description: string;
    members: number;
    contributions: { member: string; amount: number; date: string }[];
    nextPayout: string;
    plan: string;
    contributionAmount: number;
    payoutAmount: number;
    cycle: string;
    startDate: string;
    endDate: string;
    status: string;
}

export const GROUPS: Group[] = [
    {
        id: '1',
        name: 'Juru Savings Circle',
        description: 'A group of friends saving together for a common goal.',
        members: 10,
        contributions: [
            { member: 'Mama Mary', amount: 52000, date: '2024-06-01' },
            { member: 'Chinedu', amount: 48500, date: '2024-06-02' },
            { member: 'Iya Basira', amount: 55000, date: '2024-06-03' },
            { member: 'Emeka', amount: 50000, date: '2024-06-04' },
            { member: 'Folake', amount: 45000, date: '2024-06-05' },
            { member: 'Alhaji Kabir', amount: 60000, date: '2024-06-06' },
            { member: 'Ngozi', amount: 47500, date: '2024-06-07' },
            { member: 'Dipo', amount: 51000, date: '2024-06-08' },
        ],
        nextPayout: 'Mama Mary (Tomorrow)',
        plan: 'Monthly',
        contributionAmount: 50000,
        payoutAmount: 500000,
        cycle: 'Oshodi Market Cycle',
        startDate: '2024-06-01',
        endDate: '2024-12-01',
        status: 'Active',
    },
    {
        id: '2',
        name: 'Tech Enthusiasts Circle',
        description: 'A group of tech enthusiasts saving together for a common goal.',
        members: 10,
        contributions: [
            { member: 'Papa Ejike', amount: 105000, date: '2024-06-01' },
            { member: 'Sade', amount: 95000, date: '2024-06-02' },
            { member: 'Kunle', amount: 110000, date: '2024-06-03' },
            { member: 'Amaka', amount: 102000, date: '2024-06-04' },
            { member: 'Yemi', amount: 98000, date: '2024-06-05' },
            { member: 'Babatunde', amount: 115000, date: '2024-06-06' },
            { member: 'Chisom', amount: 108000, date: '2024-06-09' },
            { member: 'Aunty Joy', amount: 92000, date: '2024-06-10' },
        ],
        nextPayout: 'Aunty Joy (Next Week)',
        plan: 'Weekly',
        contributionAmount: 100000,
        payoutAmount: 1000000,
        cycle: 'Yaba Tech Hub Cycle',
        startDate: '2024-06-01',
        endDate: '2024-12-01',
        status: 'Active',
    },
    {
        id: '3',
        name: 'Family Savings Circle',
        description: 'A group of family members saving together for a common goal.',
        members: 10,
        contributions: [
            { member: 'Ebuka', amount: 22000, date: '2024-06-01' },
            { member: 'Nkechi', amount: 18000, date: '2024-06-02' },
            { member: 'Seyi', amount: 25000, date: '2024-06-03' },
            { member: 'Funmi', amount: 21500, date: '2024-06-04' },
            { member: 'Kemi', amount: 19500, date: '2024-06-05' },
            { member: 'Obinna', amount: 30000, date: '2024-06-11' },
            { member: 'Amina', amount: 27000, date: '2024-06-12' },
            { member: 'Pastor Chris', amount: 20000, date: '2024-06-13' },
        ],
        nextPayout: 'Obinna (In 2 days)',
        plan: 'Weekly',
        contributionAmount: 20000,
        payoutAmount: 200000,
        cycle: 'Family Monthly Pot',
        startDate: '2024-06-01',
        endDate: '2024-12-01',
        status: 'Active',
    },
    {
        id: '4',
        name: 'Community Builders Circle',
        description: 'A group of community builders saving together for a common goal.',
        members: 10,
        contributions: [
            { member: 'Taiwo', amount: 12500, date: '2024-06-01' },
            { member: 'Kehinde', amount: 13000, date: '2024-06-02' },
            { member: 'Femi', amount: 11000, date: '2024-06-03' },
            { member: 'Chika', amount: 14500, date: '2024-06-04' },
            { member: 'Blessing', amount: 15000, date: '2024-06-05' },
            { member: 'Victor', amount: 16500, date: '2024-06-14' },
            { member: 'Sunday', amount: 10500, date: '2024-06-15' },
            { member: 'Iyawo', amount: 17000, date: '2024-06-16' },
        ],
        nextPayout: 'Iyawo (Tomorrow)',
        plan: 'Monthly',
        contributionAmount: 15000,
        payoutAmount: 150000,
        cycle: 'CDA Monthly Contribution',
        startDate: '2024-06-01',
        endDate: '2024-12-01',
        status: 'Active',
    }
];