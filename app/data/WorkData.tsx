export type PositionType = {
    position: string;
    location?: string;
    locationCoordinates?: { lat: number, lng: number };
    contractType?: "full-time" | "part-time" | "contract" | "freelance" | "internship";
    start: Date;
    end?: Date;
    content?: string[];
    tags?: string[];
}

export type workHistoryType = {
    company: string;
    companyWebsite?: string;
    logo?: string;
    companyDescription?: string;
    positions: PositionType[];
}[];

const createDateUTC = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(Date.UTC(year, month, day));
};


export const workHistory: workHistoryType = [
    {
        company: "BURY Technologies",
        companyWebsite: "https://bury.com",
        companyDescription: "​BURY is a global automotive supplier specializing in the development and production of advanced communication and connectivity systems for vehicles. Founded in 1987, the company operates across Europe, Asia, and North America, with facilities in Poland located in Mielec and Rzeszów.",
        positions: [
            {
                position: "Automation Engineer",
                contractType: "full-time",
                start: createDateUTC("2019-01-01"),
                end: createDateUTC("2019-08-01"),
                content: [
                    "Lorem Ipsum"
                ],
            }
        ],
    },
    {
        company: "SOFICO",
        companyWebsite: "https://sofico.be",
        companyDescription: "Sofico is the world’s leading supplier of mission-critical software solutions for automotive finance, leasing, fleet, and mobility management companies, and its software is used by a broad range of renowned leasing companies all over the world. Sofico was founded in 1988 in Ghent, Belgium, and has over 35 years of experience and business expertise in the industry. It is semi-privately owned, independent and currently employs 550 people in 11 offices worldwide. The company has installed its systems in 27 countries worldwide.",
        positions: [
            {
                position: "Java Core Developer",
                contractType: "full-time",
                start: createDateUTC("2019-12-01"),
                end: createDateUTC("2022-04-01"),
                content: [
                    "Lorem Ipsum"
                ],
                tags: ["Java", "OracleSQL", "Bitbucket", "Jira"],
            },
        ],
    },
    {
        company: "Texas A&M Transportation Institute",
        companyWebsite: "https://tti.tamu.edu",
        companyDescription: "Texas A&M Transportation Institute (TTI) is a state agency and a member of The Texas A&M University System. The research program at TTI addresses the mobility challenges of the 21st century, with an emphasis on safety and security, reliability and resiliency, and sustainability.",
        positions: [
            {
                position: "Software Applications Developer I",
                contractType: "full-time",
                start: createDateUTC("2022-04-01"),
                end: createDateUTC("2024-08-01"),
                content: [
                    "Lorem Ipsum"
                ],
                tags: ["Python", "Javascript", "React", "PostgreSQL", "Azure", "Github"],
            },
            {
                contractType: "full-time",
                position: "Software Applications Developer II",
                start: createDateUTC("2024-08-01"),
                content: [
                    "Lorem Ipsum"
                ],
                tags: ["Python", "Javascript", "React", "PostgreSQL", "Azure", "Github", "ClickUp"],
            },
        ],
    },
]