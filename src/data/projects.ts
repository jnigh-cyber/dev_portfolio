export type ProjectStatus = 'Deployed' | 'Pending';

export type Project = {
    id: number;
    title: string;
    stack: string;
    status: ProjectStatus;
    url: string | null;
}

export const projects = [
    {
        id: 1,
        title: 'Car Loan Calculator',
        stack: 'React · TypeScript · Express · Postgres · JWT · Live on Render',
        status: 'Deployed',
        url: 'https://car-loan-calc.onrender.com/login',
    },
    {
        id: 2,
        title: 'Auto Detailing Demo Site',
        stack: 'React · Tailwind',
        status: 'Deployed',
        url: 'https://auto-detail-demo-seven.vercel.app/'
    },
    {
        id: 3,
        title: 'Grass & More Co. Demo Site',
        stack: 'React · Tailwind · Vitest · RTL Coverage',
        status: 'Deployed',
        url: 'https://landscaping-demo-eta.vercel.app/'
    },
    {
        id: 4,
        title: 'Bassalytics',
        stack: 'Capacitor · Express · Postgres · Open-Meteo · USGS',
        status: 'Pending',
        url: null
    },
];


