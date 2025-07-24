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

export type WorkHistoryType = {
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


export const WorkHistory: WorkHistoryType = [
    {
        company: "Volkswagen de México",
        companyWebsite: "https://www.vw.com.mx/",
        logo: "https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_retina_2400.jpg?1649155356",
        companyDescription: "One of the world's leading automobile manufacturers. The company operates a large manufacturing plant in Puebla, Mexico, producing a range of vehicles for both domestic and international markets. With a strong commitment to quality and innovation, Volkswagen de México plays a key role in the global operations of the Volkswagen Group.",
        positions: [
            {
                position: "Internship at Betriebsmanagement",
                location: "Puebla, Puebla, Mexico",
                contractType: "internship",
                start: createDateUTC("2017-02-01"),
                end: createDateUTC("2017-08-01"),
                content: [
                    "Productive improvement of the Volkswagen’s learning station.",
                    "Redesign of the doors subjection device used in paint shop process of the VW Golf.Generating a saving of $2USD per device.",
                    "Design of a Layout and control of personal’s locker availability.",
                    "Development of a graphical user interface for a better control of the print out of payroll Boucher with a internal web page using PHP and CSS.",
                    "Development of a graphical user interface for management reports of the productive area PPA."
                ],
                tags: ["PHP", "CSS", "HTML", "Office 365"],
            }
        ],
    },
    {
        company: "El Faro Ferreterias",
        logo: "./images/faro.jpg",
        companyWebsite: "https://elfaroferreterias.com/index.html",
        companyDescription: "One of the world's leading automobile manufacturers. The company operates a large manufacturing plant in Puebla, Mexico, producing a range of vehicles for both domestic and international markets. With a strong commitment to quality and innovation, Volkswagen de México plays a key role in the global operations of the Volkswagen Group.",
        positions: [
            {
                position: "I.T. Manager",
                location: "Ciudad mendoza, Veracruz, Mexico",
                contractType: "freelance",
                start: createDateUTC("2017-09-01"),
                end: createDateUTC("2018-07-01"),
                content: [
                    "Development of personal and assistance control using Java language and MySQL database.",
                    "Storage of fingerprints in databases using biometric scanner Digital Persona U.are.U 4500.",
                    "Transfer of Personal and vehicles information to a database schema of MySQL.",
                    "Creation of a corporative web page and corporative mails to give customers a most professional attention.",
                    "Design of a new image for the company, by creating a better logo."
                ],
                tags: ["Java Swing", "MySQL", "biometric scanner", "HTML", "CSS", "Photoshop", "Illustrator"],
            }
        ],
    },
    {
        company: "BURY Technologies",
        companyWebsite: "https://bury.com",
        logo: "https://www.bury.com/wp-content/uploads/2020/05/logo_BURY_2020_ciemne_v2.svg",
        companyDescription: "​BURY is a global automotive supplier specializing in the development and production of advanced communication and connectivity systems for vehicles. Founded in 1987, the company operates across Europe, Asia, and North America, with facilities in Poland located in Mielec and Rzeszów.",
        positions: [
            {
                position: "Maintenance Engineer",
                location: "Huamantla, Tlaxcala, Mexico",
                contractType: "full-time",
                start: createDateUTC("2019-01-01"),
                end: createDateUTC("2019-08-01"),
                content: [
                    "Performed preventive maintenance on production equipment to ensure operational uptime.",
                ],
                tags: ["PLC"],
            },
            {
                position: "Automation Engineer",
                location: "Mielec, Poland",
                contractType: "full-time",
                start: createDateUTC("2019-01-01"),
                end: createDateUTC("2019-08-01"),
                content: [
                    "Developed C# interfaces and libraries for Modbus communication and Mitsubishi PLC integration for signal and camera monitoring.",
                    "Configured sensors and developed production monitoring software using Delta PLC.",
                ],
                tags: ["PLC", "Delta", "C#"],
            }
        ],
    },
    {
        company: "SOFICO",
        companyWebsite: "https://sofico.be",
        // logo: "https://sofico.global/app/themes/sage/public/images/general/logo-sofico.cec1ce.svg",
        companyDescription: "Sofico is the world’s leading supplier of mission-critical software solutions for automotive finance, leasing, fleet, and mobility management companies, and its software is used by a broad range of renowned leasing companies all over the world. Sofico was founded in 1988 in Ghent, Belgium, and has over 35 years of experience and business expertise in the industry. It is semi-privately owned, independent and currently employs 550 people in 11 offices worldwide. The company has installed its systems in 27 countries worldwide.",
        positions: [
            {
                position: "Java Core Developer",
                location: "Puebla, Puebla, Mexico",
                contractType: "full-time",
                start: createDateUTC("2019-12-01"),
                end: createDateUTC("2022-04-01"),
                content: [
                    "Built and optimized backend features for Volkswagen Mexico, working on Miles, a largescale leasing system using Java.",
                    "Improved data processing and business logic for Miles software features powered by a SOAP API.",
                    "OptimizedOracleSQLqueries toenhance performanceandsupport evolving requirements.",
                    "Resolved critical bugs and improved legacy code quality, navigating a complex codebase with high confidence.",
                    "Collaborated with international teamsin Agile sprints, delivering solutions across multiple countries and time zones."
                ],
                tags: ["Java", "OracleSQL", "Bitbucket", "Git", "Jira", "Agile"],
            },
        ],
    },
    {
        company: "Texas A&M Transportation Institute",
        companyWebsite: "https://tti.tamu.edu",
        // logo: "https://tti.tamu.edu/wp-content/themes/tti18/images/tti-logo-rgb.svg",
        companyDescription: "Texas A&M Transportation Institute (TTI) is a state agency and a member of The Texas A&M University System. The research program at TTI addresses the mobility challenges of the 21st century, with an emphasis on safety and security, reliability and resiliency, and sustainability.",
        positions: [
            {
                position: "Software Applications Developer I",
                location: "College Station, Texas, USA",
                contractType: "full-time",
                start: createDateUTC("2022-04-01"),
                end: createDateUTC("2024-08-01"),
                content: [
                    "Configured Linux Azure server for real-time UDP data ingestion.",
                    "Designed initial PostgreSQL schema and developed the first Python REST API.",
                    "Built first React dashboard with Material UI and Azure AD authentication.",
                ],
                tags: ["Python", "Javascript", "React", "PostgreSQL", "Azure", "Github"],
            },
            {
                position: "Software Applications Developer II",
                contractType: "full-time",
                location: "College Station, Texas, USA",
                start: createDateUTC("2024-08-01"),
                content: [
                    "Promoted from Developer I after demonstrating leadership and technical excellence.",
                    "Developed a scalable Python REST API to power a real-time reporting system using roadside sensor data, with JWT authentication and PostgreSQL as the main database.",
                    "Developed dashboards from scratch using Next.js (TypeScript), Tailwind CSS, and SSR for better performance and SEO.",
                    "Led a development team, managing tasks, code reviews, and mentoring interns and junior developers.",
                ],
                tags: ["Python", "Javascript", "React", "PostgreSQL", "Azure", "Github", "ClickUp"],
            },
        ],
    },
]